pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '10')) // Keep only last 10 builds
        disableConcurrentBuilds() // Prevent race conditions
    }

    environment {
        IMAGE_NAME = 'devtalk-app'
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH"
        
        // Credentials
        DB_PASSWORD = credentials('devtalk-db-password')
        DATABASE_URL = credentials('devtalk-database-url')
        CLERK_PUBLISHABLE_KEY = credentials('clerk-publishable-key')
        CLERK_SECRET_KEY = credentials('clerk-secret-key')
        PUSHER_APP_ID = credentials('pusher-app-id')
        PUSHER_APP_KEY = credentials('pusher-app-key')
        PUSHER_SECRET = credentials('pusher-secret')
        UPLOADTHING_TOKEN = credentials('uploadthing-token')
        
        // Aliases
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = credentials('clerk-publishable-key')
        NEXT_PUBLIC_PUSHER_APP_KEY = credentials('pusher-app-key')
    }

    stages {
        stage('System Check') {
            steps {
                script {
                    sh 'docker --version || true'
                    sh 'node -v || true'
                }
            }
        }

        stage('Quality Check') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                stage('Unit Tests') {
                    steps {
                        sh 'npm run test'
                    }
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    sh '''
                    export PATH=$PATH:/usr/local/bin:/usr/bin
                    docker build \
                    --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="${CLERK_PUBLISHABLE_KEY}" \
                    --build-arg NEXT_PUBLIC_PUSHER_APP_KEY="${PUSHER_APP_KEY}" \
                    -t "${IMAGE_NAME}:${BUILD_NUMBER}" \
                    -t "${IMAGE_NAME}:latest" .
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                    export PATH=$PATH:/usr/local/bin:/usr/bin
                    
                    COMPOSE_CMD="docker compose"
                    if ! command -v docker compose &> /dev/null; then
                        COMPOSE_CMD="docker-compose"
                    fi
                    
                    $COMPOSE_CMD down || true
                    # Deploy specific version
                    TAG=${BUILD_NUMBER} $COMPOSE_CMD up -d
                    '''
                }
            }
        }

        stage('Database Migration') {
            steps {
                script {
                    echo "Waiting for DB..."
                    sh 'sleep 20'
                    sh '''
                    export PATH=$PATH:/usr/local/bin:/usr/bin
                    INTERNAL_DB_URL="postgresql://devtalk_user:${DB_PASSWORD:-devtalk_pass}@db:5432/devtalk?schema=public"
                    docker exec -e DATABASE_URL="${INTERNAL_DB_URL}" devtalk-app npx prisma db push --accept-data-loss
                    '''
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
                            sh 'curl -f http://localhost:3000/api/health'
                            success = true
                            break
                        } catch (e) {
                            echo "App starting... (${i+1}/15)"
                            sh 'sleep 5'
                        }
                    }
                    if (!success) {
                        sh 'export PATH=$PATH:/usr/local/bin:/usr/bin && docker logs devtalk-app'
                        error "Deployment failed health check"
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'export PATH=$PATH:/usr/local/bin:/usr/bin && docker image prune -f || true'
            }
        }
    }
}