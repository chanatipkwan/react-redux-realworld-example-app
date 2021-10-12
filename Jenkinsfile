pipeline {
    agent {
        docker {
            image 'mrts/docker-python-nodejs-google-chrome'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME="."
    }
    stages {
        stage("Install dependeicies") {
            steps {
                sh 'npm install'
                sh 'npm rebuild'
            }
        }
        stage("Running & Testing") {
            steps {
                sh 'npm start&'
            }
        }
    }
}
