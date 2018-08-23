pipeline {
    agent { docker { image 'node:10' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                sh 'npm test'
            }
        }

        stage('deploy') {
            when {
                branch 'master'
            }
            
            withDockerRegistry([ credentialsId: "dockerhub-credentials", url: "" ]) {
                docker.image('docker').inside {
                    sh 'docker build -t lucasperea/node-demo-app:latest .'
                    sh 'docker push lucasperea/node-demo-app:latest'
                }
            }
        }     
    }
}
