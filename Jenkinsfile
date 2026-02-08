pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devtalk-app'
        // PATH Fix: Docker'ın yaygın yüklendiği yolları ekliyoruz
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH"
        
        // Jenkins Credentials
        DB_PASSWORD = credentials('devtalk-db-password')
        DATABASE_URL = credentials('devtalk-database-url')
        CLERK_PUBLISHABLE_KEY = credentials('clerk-publishable-key')
        CLERK_SECRET_KEY = credentials('clerk-secret-key')
        PUSHER_APP_ID = credentials('pusher-app-id')
        PUSHER_APP_KEY = credentials('pusher-app-key')
        PUSHER_SECRET = credentials('pusher-secret')
    }

    stages {
        // Otomatik SCM Checkout zaten yapıldığı için bu aşamayı sadece loglama için tutuyoruz
        stage('Initialize') {
            steps {
                script {
                    sh "echo 'Current PATH: \$PATH'"
                    sh "docker --version || echo 'Docker not found in standard PATH'"
                }
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
                    // Docker Compose v1 veya v2 tespiti
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
                    sh "sleep 15" // DB konteynerinin tam oturması için biraz daha süre
                    sh "docker exec devtalk-app npx prisma db push --accept-data-loss"
                }
            }
        }

        stage('Verify') {
            steps {
                script {
                    echo "Verifying health check..."
                    def maxRetries = 15
                    def success = false
                    for (int i = 0; i < maxRetries; i++) {
                        try {
                            sh "curl -f http://localhost:3000/api/health"
                            success = true
                            break
                        } catch (e) {
                            echo "App starting... (${i+1}/${maxRetries})"
                            sh "sleep 5"
                        }
                    }
                    if (!success) {
                        sh "docker logs devtalk-app"
                        error "Health check failed!"
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                // Cleanup stage'ini node içinde güvenli çalıştırma
                sh "docker image prune -f"
            }
        }
    }
}