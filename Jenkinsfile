pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devtalk-app'
        // Jenkins Credentials ID - Bunlar Jenkins panelinde oluşturulmuş olmalı
        DB_PASSWORD = credentials('devtalk-db-password')
        DATABASE_URL = credentials('devtalk-database-url')
        CLERK_PUBLISHABLE_KEY = credentials('clerk-publishable-key')
        CLERK_SECRET_KEY = credentials('clerk-secret-key')
        PUSHER_APP_ID = credentials('pusher-app-id')
        PUSHER_APP_KEY = credentials('pusher-app-key')
        PUSHER_SECRET = credentials('pusher-secret')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                script {
                    sh """
                    docker build \
                    --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='${CLERK_PUBLISHABLE_KEY}' \
                    --build-arg NEXT_PUBLIC_PUSHER_APP_KEY='${PUSHER_APP_KEY}' \
                    -t ${IMAGE_NAME}:latest .
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Docker Compose versiyon kontrolü (v1 vs v2)
                    def dockerComposeCmd = sh(script: 'docker-compose --version', returnStatus: true) == 0 ? 'docker-compose' : 'docker compose'
                    
                    sh """
                    export DB_PASSWORD='${DB_PASSWORD}'
                    export NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='${CLERK_PUBLISHABLE_KEY}'
                    export CLERK_SECRET_KEY='${CLERK_SECRET_KEY}'
                    export PUSHER_APP_ID='${PUSHER_APP_ID}'
                    export NEXT_PUBLIC_PUSHER_APP_KEY='${PUSHER_APP_KEY}'
                    export PUSHER_SECRET='${PUSHER_SECRET}'
                    
                    ${dockerComposeCmd} down || true
                    ${dockerComposeCmd} up -d
                    """
                }
            }
        }

        stage('Database Migration') {
            steps {
                script {
                    echo "Waiting for DB to be ready..."
                    sh "sleep 10"
                    sh "docker exec devtalk-app npx prisma db push --accept-data-loss"
                }
            }
        }

        stage('Verify') {
            steps {
                script {
                    echo "Verifying deployment health..."
                    def maxRetries = 12
                    def success = false
                    for (int i = 0; i < maxRetries; i++) {
                        try {
                            // Docker içindeki uygulamaya localhost:3000 üzerinden erişim testi
                            sh "curl -f http://localhost:3000/api/health"
                            success = true
                            break
                        } catch (e) {
                            echo "Container starting up... (${i+1}/${maxRetries})"
                            sh "sleep 5"
                        }
                    }
                    if (!success) {
                        echo "Deployment verification failed. Logs:"
                        sh "docker logs devtalk-app"
                        error "Health check failed"
                    }
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                sh "docker image prune -f"
            }
        }
    }
}