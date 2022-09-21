
# React Native - COGNITO 

### 1 - Conta ativa na AWS.

### 2 - Seguir passos para criação de um IAM (Identity and Access Management)

### 3 - Instalar AWS Amplify CLI
```sh
npm install -g @aws-amplify/cli
```

### 4 - Instalar as dependências
```sh
npm install aws-amplify aws-amplify-react-native @react-native-picker/picker @react-native-async-storage/async-storage @react-native-community/netinfo
```

### 5 - Configurar credenciais (dentro do diretório do projeto);
```sh
amplify configure
Press Enter to continue
```

- Set region and username:

```sh
Specify the AWS Region
? region:  sa-east-1
Specify the username of the new IAM user:
? user name:  auth-gamaacademy-acate
Press Enter to continue
```

- Set keys and profile name:

```sh
Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  default
```

### 6 - Amplify init
```sh
amplify init
```

- Set name project:

```sh
? Enter a name for the project authgamaacademyacate
```

- Set configs project:

```sh
? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  sa-east-1
Adding backend environment dev to AWS Amplify app: dw5jprfhdmjm6
```

### 7 - Amplify add auth
```sh
amplify add auth
```

### 8 - Amplify status
```sh
amplify status
```

### 9 - Amplify push
```sh
amplify push
? Are you sure you want to continue? Yes
```