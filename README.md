# Online Transfer Services Management System - Express JS 
This is the Microservice architecture of Online Transfer Services Managemet system with total 5 API's- (PORT: 5000)
- User API - (PORT: 5001)
- Admin API - (PORT: 5002)
- UPI API - (PORT: 5003)
- NEFT API - (PORT: 5004)
- IMPS API - (PORT: 5005)
Here I am using <b>http-proxy-middlewre<b> for API Gateway and its running on PORT 5000.
API's to showcase CRUD operations using Express JS with Authentication using JWT Tokens. Using Bcrypt and AES mechanism for secure Passwords and keys.
## Features
- Express JS Rest API Setup
- Authentication using JWT Tokens with Middlewares
- Learn how to setup a express js api with minimal codebase.
- Complete Signup/Login Flow.
- CRUD operations for Project (GET, POST, PUT, DELETE, InterAPI Connection)
- Testing
- API GATEWAY
- DOCKER
- REDIS
- KAFKA | RMQ
- AWS NODE DEPLOY
- SONAR QUBE
- JMETER
- POSTMAN TESTING & COLLECTION
- SWAGGER DOCUMENTATION
- MONGODB & POSTGRESQL
- SOCKET IO
- MOCHA CHAI
- ENCRYPTION AES 
- KEY PHRASE
- FETCH 
- GIT
- EXPRESS
- SELENIUM
## Functionality

# All API will be access from API-GATEWAY using jwtoken where-ever require

# User API
1) we can create user or customer.
2) User can enter his detail while posting in json format
3) User SignUp/Signin once created.
4) User can fetch his profile info
5) User can fetch his detail by id
6) User can fetch his detail by UPI
7) User can add money in his account

# Admin API
1) Admin can Signin and SignUp using credentials.
2) Admin can fetch all users data 
3) Admin can delete user by id
4) Admin can see all UPI trans transfer History
5) Admin can delete UPI trans History transfer by id 
6) Admin can see all NEFT trans transfer History
7) Admin can delete NEFT History trans transfer by id 
8) Admin can see all IMPS trans transfer History
9) Admin can delete IMPS History trans transfer by id 

# UPI API
1) UPI transfer - User can transfer money using UPI Id
2) User can get his history info by UPI Id

# NEFT API
1) NEFT transfer - User can transfer money using Bank Account details
2) User can get his all transaction history info by bank account 

# IMPS API
1) IMPS transfer - User can transfer money using Bank Account details
2) User can get his all transaction history info by bank account 

## Step 2: Install Git and clone repository from GitHub
To install git, run below commands in the terminal window:
```bash
sudo apt-get update -y
sudo apt-get install git -y
```
Just to verify if system has git installed or not, please run below command in terminal:
```bash
git — version
```
This command will print the git version in the terminal.
Run below command to clone the code repository from Github:
```bash
git clone https://github.com/FC-Digital-Wallet.git
```
Get inside the directory and Install Packages
```bash
cd nodejs-on-ec2
npm install
```
Start the application
To start the application, run the below command in the terminal:
```bash
npm start
