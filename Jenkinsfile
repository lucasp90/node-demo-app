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

        stage('Publish') {
            when {
                branch 'master'
            }
            docker.image('docker').inside {
                withDockerRegistry([ credentialsId: "dockerhub-credentials", url: "" ]) {
                    stage("Build image") {
                        sh 'docker build -t lucasperea/node-demo-app:latest .'
                    }
                    stage("Push image") {
                        sh 'docker push lucasperea/node-demo-app:latest'
                    }
                }
            }
        }                
    }
}
