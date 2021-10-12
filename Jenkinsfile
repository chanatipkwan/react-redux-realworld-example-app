pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME="."
    }
    stages {
        stage("Install dependencies") {
            steps {
                sh 'npm install'
                sh 'npm rebuild'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage("Deliver"){
            steps{
                sh '.deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh '.kill.sh'
            }

        }
    }
}
