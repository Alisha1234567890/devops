pipeline {
  agent any

  stages {
    stage('Clone Code') {
      steps {
        git url: 'https://github.com/Alisha1234567890/devops.git'
        echo 'Code cloned successfully.'
      }
    }

    stage('List Files') {
      steps {
        sh 'ls -l'
      }
    }

    stage('Build Success') {
      steps {
        echo '✅ Jenkins pipeline finished successfully!'
      }
    }
  }
}
