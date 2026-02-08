pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devtalk-app'
        // Docker'ın potansiyel tüm yollarını zorla ekliyoruz
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
        stage('System Check') {
            steps {
                script {
                    // Docker'ın nerede olduğunu bulmaya çalışalım
                    sh "which docker || echo 'docker not found in common paths'"
                    sh "docker --version || true"
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    // PATH'i sh içinde de garantiye alalım
                    sh """
                    export PATH=\$PATH:/usr/local/bin:/usr/bin
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
                    sh """
                    export PATH=\$PATH:/usr/local/bin:/usr/bin
                    export DB_PASSWORD='${DB_PASSWORD}'
                    export NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='${CLERK_PUBLISHABLE_KEY}'
                    export CLERK_SECRET_KEY='${CLERK_SECRET_KEY}'
                    export PUSHER_APP_ID='${PUSHER_APP_ID}'
                    export NEXT_PUBLIC_PUSHER_APP_KEY='${PUSHER_APP_KEY}'
                    export PUSHER_SECRET='${PUSHER_SECRET}'
                    
                    # Docker Compose tespiti
                    COMPOSE_CMD="docker compose"
                    if ! command -v docker compose &> /dev/null; then
                        COMPOSE_CMD="docker-compose"
                    fi
                    
                    \$COMPOSE_CMD down || true
                    \$COMPOSE_CMD up -d
                    """
                }
            }
        }

        stage('Database Migration') {
            steps {
                script {
                    echo "Waiting for DB..."
                    sh "sleep 20"
                    sh "export PATH=\$PATH:/usr/local/bin:/usr/bin && docker exec devtalk-app npx prisma db push --accept-data-loss"
                }
            }
        }

        stage('Verify') {
            steps {
                script {
                    echo "Verifying health..."
                    def success = false
                    for (int i = 0; i < 15; i++) {
                        try {
                            sh "curl -f http://localhost:3000/api/health"
                            success = true
                            break
                        } catch (e) {
                            echo "App starting... (${i+1}/15)"
                            sh "sleep 5"
                        }
                    }
                    if (!success) {
                        sh "export PATH=\$PATH:/usr/local/bin:/usr/bin && docker logs devtalk-app"
                        error "Deployment failed health check"
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                // Post-build işlemleri de PATH bağımlı olabilir
                sh "export PATH=\$PATH:/usr/local/bin:/usr/bin && docker image prune -f || true"
            }
        }
    }
}