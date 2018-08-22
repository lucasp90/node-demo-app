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

        stage('deploy'){
            steps {
                sh 'ssh root@20.2.1.85 \'docker stop appdenode\''
                sh 'ssh root@20.2.1.85 \'docker rm appdenode\''
                sh 'ssh root@20.2.1.85 \'docker pull lucasperea/node-demo-app\''
                sh 'ssh root@20.2.1.85 \'docker run -d -p 9000:3000 --name appdenode lucasperea/node-demo-app\' '
            }
        }

    }
}
