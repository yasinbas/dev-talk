pipeline {
    agent any

    environment {
        // App Config
        IMAGE_NAME = 'devtalk-app'
        CONTAINER_NAME = 'devtalk-app'
        PORT = '3000'
        
        // Secrets
        DATABASE_URL = credentials('devtalk-database-url')
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = credentials('clerk-publishable-key')
        CLERK_SECRET_KEY = credentials('clerk-secret-key')
        PUSHER_APP_ID = credentials('pusher-app-id')
        NEXT_PUBLIC_PUSHER_APP_KEY = credentials('pusher-app-key')
        PUSHER_SECRET = credentials('pusher-secret')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Install & Test') removed to avoid host Node.js dependency


        stage('Build Docker Image') {
            steps {
                script {
                    // Next.js'in frontend tarafında keyleri görebilmesi için --build-arg kullanmalıyız
                    sh """
                    docker build \
                    --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}' \
                    --build-arg NEXT_PUBLIC_PUSHER_APP_KEY='${NEXT_PUBLIC_PUSHER_APP_KEY}' \
                    -t ${IMAGE_NAME}:${BUILD_NUMBER} .
                    """
                }
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh "docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest"
                    
                    // Stop & Remove Old
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    
                    // Migrate DB
                    sh """
                        docker run --rm \
                        -e DATABASE_URL='${DATABASE_URL}' \
                        ${IMAGE_NAME}:latest \
                        npx prisma db push --accept-data-loss
                    """

                    // Start New
                    sh """
                        docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart always \
                        -p ${PORT}:3000 \
                        -e DATABASE_URL='${DATABASE_URL}' \
                        -e NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}' \
                        -e CLERK_SECRET_KEY='${CLERK_SECRET_KEY}' \
                        -e PUSHER_APP_ID='${PUSHER_APP_ID}' \
                        -e NEXT_PUBLIC_PUSHER_APP_KEY='${NEXT_PUBLIC_PUSHER_APP_KEY}' \
                        -e PUSHER_SECRET='${PUSHER_SECRET}' \
                        ${IMAGE_NAME}:latest
                    """
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
