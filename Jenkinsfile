pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devtalk-app'
        // Jenkins Credentials ID'leri
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
                    // Docker Compose ile her şeyi (DB dahil) ayağa kaldır
                    sh """
                    export DB_PASSWORD='${DB_PASSWORD}'
                    export NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='${CLERK_PUBLISHABLE_KEY}'
                    export CLERK_SECRET_KEY='${CLERK_SECRET_KEY}'
                    export PUSHER_APP_ID='${PUSHER_APP_ID}'
                    export NEXT_PUBLIC_PUSHER_APP_KEY='${PUSHER_APP_KEY}'
                    export PUSHER_SECRET='${PUSHER_SECRET}'
                    
                    docker-compose down || true
                    docker-compose up -d
                    """
                }
            }
        }

        stage('Database Migration') {
            steps {
                script {
                    echo "Running migrations..."
                    // App konteyneri içinden prisma migration çalıştır
                    sh "docker exec devtalk-app npx prisma db push --accept-data-loss"
                }
            }
        }

        stage('Verify') {
            steps {
                script {
                    echo "Verifying deployment..."
                    def maxRetries = 10
                    def success = false
                    for (int i = 0; i < maxRetries; i++) {
                        try {
                            sh "curl -f http://localhost:3000/api/health"
                            success = true
                            break
                        } catch (e) {
                            echo "Waiting for app... (${i+1}/${maxRetries})"
                            sh "sleep 5"
                        }
                    }
                    if (!success) error "Deployment failed health check"
                }
            }
        }
    }

    post {
        always {
            sh "docker image prune -f"
        }
    }
}