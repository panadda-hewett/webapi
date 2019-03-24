# webapi
This is a containerised web api application that returns basic information about the application. This application is writtened in NodeJS. The CI/CD pipelines has been configured in Azure DevOps (VSTS) and deploy to the Azure App service for Container: https://panadda-webapi.azurewebsites.net .

# Features
1. the endpoint will returns information about the application in JSON format. 
Example:
{
    "myapplication": [
        {
            "version": "1.0.1",
            "description": "Panadda - pre-interview technical test",
            "lastcommitsha": "ce0fecf9c9cc48b04d9037b3199fd3281a7c8484\n"
        }
    ]
}
2. "/healthcheck" endpoint
Example: https://panadda-webapi.azurewebsites.net/healthcheck

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
Current Buid Pipeline status: <img src="https://dev.azure.com/1variety/Panadda/_apis/build/status/WebApi?branchName=master">
This reponsitory has been configured with Azure DevOps build pipeline:
https://dev.azure.com/1variety/panadda/_build?definitionId=3

The pipeline gets executed when new code is commited and pushed to Master brunch.

The pipeline has been set to public views only. Unauthorized user can edit, manange, delete.

The pipeline contains steps to performs above npm installations, buid dockerfile and push to Azure container repository (ACR). The full configuration of the pipeline can be downloaded as JSON format file from the 3 dots icon at the top right conner menu next to 'Queue' option, then select 'Export'.


# Continuous Delivery (CD)
This reponsitory has been configured with Azure DevOps release pipeline:
https://dev.azure.com/1variety/Panadda/_release?definitionId=2

This pipeline gets executed when above build pipeline is completed successfully.
