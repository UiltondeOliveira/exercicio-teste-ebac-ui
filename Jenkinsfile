pipeline{
    agent any

    stages {
        stage ('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/UiltondeOliveira/exercicio-teste-ebac-ui.git'
            }
        }
                stage ('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
                stage ('executar testes') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}