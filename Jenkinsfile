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

        stage('publish') {
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

        stage('deploy') {
            agent any

            when {
                branch 'master'
            }

            steps {
                sshagent (credentials: ['prod-server-ssh']) {
                    sh 'ssh root@20.2.1.85 \'docker stop appdenode\''
                    sh 'ssh root@20.2.1.85 \'docker rm appdenode\''
                    sh 'ssh root@20.2.1.85 \'docker pull lucasperea/node-demo-app:latest\''
                    sh 'ssh root@20.2.1.85 \'docker run -d -p 9000:3000 --name appdenode lucasperea/node-demo-app:latest\' '
                }
            }
        }
    }
}
