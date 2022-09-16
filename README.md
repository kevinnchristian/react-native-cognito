
# React Native - COGNITO 

## 1 - Conta ativa na AWS.

## 2 - Instalar AWS Amplify
`npm install -g @aws-amplify/cli`

## 3 - Configurar credenciais (dentro do diretório do projeto);
`amplify configure`

### Seguir passos para criação de um IAM (Identity and Access Management)

## 4 - Baixar as credenciais de IAM e instruir e intruir vlia CLI.

## 5 - Adicionar AUTH com o seguinte comando:
`amplify add auth`

## 6 - Verificar status:
`amplify status`

## 7 - Publicar
`amplify push`


kevinnchristian in react-native-cognito on  main [✘!?] 
❯ amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  sa-east-1
Specify the username of the new IAM user:
? user name:  auth-gamaacademy-acate
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=sa-east-1#/users$new?step=final&accessKey&userNames=auth-gamaacademy-acate&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess-Amplify
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  default

Successfully set up the new user.
kevinnchristian in react-native-cognito on  main [✘!?] took 8m 23s 
❯ amplify init     
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project authgamaacademyacate
The following configuration will be applied:

Project information
| Name: authgamaacademyacate
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react-native
| Source Directory Path: src
| Distribution Directory Path: /
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  sa-east-1
Adding backend environment dev to AWS Amplify app: dw5jprfhdmjm6

Deployment completed.
Deployed root stack authgamaacademyacate [ ======================================== ] 4/4
        amplify-authgamaacademyacate-… AWS::CloudFormation::Stack     CREATE_COMPLETE               
        DeploymentBucket               AWS::S3::Bucket                CREATE_COMPLETE               
        AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE               
        UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE               

✔ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · no
Deployment bucket fetched.
✔ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything

kevinnchristian in react-native-cognito on  main [✘!?] took 22m 29s 
❯ amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource authgamaacademyacateeb433603 locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

kevinnchristian in react-native-cognito on  main [✘!?] took 1m 39s 
❯ amplify status  

    Current Environment: dev
    
┌──────────┬──────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name                │ Operation │ Provider plugin   │
├──────────┼──────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ authgamaacademyacateeb433603 │ Create    │ awscloudformation │
└──────────┴──────────────────────────────┴───────────┴───────────────────┘


kevinnchristian in react-native-cognito on  main [✘!?] took 2s 
❯ amplify push  
⠦ Fetching updates to backend environment: dev from the cloud.⠋ Building resource auth/authgamaacademya
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬──────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name                │ Operation │ Provider plugin   │
├──────────┼──────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ authgamaacademyacateeb433603 │ Create    │ awscloudformation │
└──────────┴──────────────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes

Deployment completed.
Deployed root stack authgamaacademyacate [ ======================================== ] 2/2
        amplify-authgamaacademyacate-… AWS::CloudFormation::Stack     UPDATE_COMPLETE               
        authauthgamaacademyacateeb433… AWS::CloudFormation::Stack     CREATE_COMPLETE               
Deployed auth authgamaacademyacateeb433603 [ ======================================== ] 10/10
        UserPool                       AWS::Cognito::UserPool         CREATE_COMPLETE               
        UserPoolClientWeb              AWS::Cognito::UserPoolClient   CREATE_COMPLETE               
        UserPoolClient                 AWS::Cognito::UserPoolClient   CREATE_COMPLETE               
        UserPoolClientRole             AWS::IAM::Role                 CREATE_COMPLETE               
        UserPoolClientLambda           AWS::Lambda::Function          CREATE_COMPLETE               
        UserPoolClientLambdaPolicy     AWS::IAM::Policy               CREATE_COMPLETE               
        UserPoolClientLogPolicy        AWS::IAM::Policy               CREATE_COMPLETE               
        UserPoolClientInputs           Custom::LambdaCallout          CREATE_COMPLETE               
        IdentityPool                   AWS::Cognito::IdentityPool     CREATE_COMPLETE               
        IdentityPoolRoleMap            AWS::Cognito::IdentityPoolRol… CREATE_COMPLETE               

## Dependecies
yarn add aws-amplify aws-amplify-react-native @react-native-picker/picker @react-native-async-storage/async-storage @react-native-community/netinfo