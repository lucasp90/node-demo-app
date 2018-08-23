pipeline {
    agent none
    stages {
        stage('build') {
            agent { docker { image 'node:10' } }
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }

        stage('test') {
            agent { docker { image 'node:10' } }
            steps {
                sh 'npm test'
            }
        }

        stage('deploy') {
            agent { docker { image 'docker' } }

            when {
                branch 'master'
            }
            
            steps {
                withDockerRegistry([ credentialsId: "dockerhub-credentials", url: "" ]) {
                    sh 'docker build -t lucasperea/node-demo-app:latest .'
                    sh 'docker push lucasperea/node-demo-app:latest'
                }
            }
        }     
    }
}
