# webapi
This is a containerised web api application that returns basic information about the application. This application is writtened in NodeJS. The CI/CD pipelines has been configured in Azure DevOps (VSTS) and deploy to the Azure App service for Container: https://panadda-webapi.azurewebsites.net.

# Features
1. the default endpoint will returns information about the application in JSON format. 
Example, {"myapplication":[{"version":"1.0.1","description":"Panadda - pre-interview technical test","lastcommitsha":"a8a118bb4cf9cc426f500a371eaaf0a8859d49bd\n"}]}
2. "/healhcheck" endpoint

# Dependencies
1. express
2. express-healthcheck
3. morgan
4. nodemon
5. git

# Installation

* npm install
* npm install express
* npm install --save-dev morgan nodemon
* npm install express-healthcheck

# Commands
* npm start
* npm dev
* npm test

# Continuous Integration (CI)
This reponsitory has been configured with Azure DevOps build pipeline:
https://dev.azure.com/1variety/panadda/_build?definitionId=3

The pipeline gets executed when new code is commited and pushed to Master brunch.

# Continuous Delivery (CD)
This reponsitory has been configured with Azure DevOps release pipeline:
https://dev.azure.com/1variety/Panadda/_release?definitionId=2

This pipeline gets executed when above build pipeline is completed successfully.
