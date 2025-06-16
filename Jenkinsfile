pipeline {
    agent any
    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/YourUsername/devops-portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-portfolio .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-portfolio'
            }
        }
    }
}
