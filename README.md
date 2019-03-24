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

* version is a variable set from package.json
* description is a variable set from package.json
* lastcommitsha is from a GIT last commit hash


2. "/healthcheck" endpoint
Example: https://panadda-webapi.azurewebsites.net/healthcheck

3. The application exposes to port 8080

# Dependencies
* express
* express-healthcheck
* morgan
* nodemon
* git

# Installation

* npm install
* npm install express
* npm install --save-dev morgan nodemon
* npm install express-healthcheck

# Commands
* npm start
* npm dev
* npm test

# Local build
docker build -t panadda/webapi .

# local deploy
docker run -p 5000:8080 -d panadda/webapi

# local test
curl -i localhost:5000

# Requirement for CI/CD
* Azure Subscription
* Azure App Service for Container (Linux)
* Azure Container Registry

# Continuous Integration (CI)
This reponsitory has been configured with Azure DevOps build pipeline:
https://dev.azure.com/1variety/panadda/_build?definitionId=3

The pipeline gets executed when new code is commited and pushed to Master brunch.

The pipeline has been set to public views only. Unauthorized user cannot edit, manange, delete.

The pipeline contains steps to performs above npm installations, buid dockerfile and push to Azure container Registry (ACR).

Current Buid Pipeline status: <img src="https://dev.azure.com/1variety/Panadda/_apis/build/status/WebApi?branchName=master">

# Add CI pipeline to your own Azure DevOps
The full configuration of the pipeline can be downloaded as JSON format file from the 3 dots icon at the top right conner menu next to 'Queue' option, then select 'Export'. Import the exported .json file into your own Azure DevOps, select the 'Hosted Ubuntu 1604' as an agent pool then select your Azure subscription and your Azure Container Registry in the Build and Push steps.

# Continuous Delivery (CD)
This reponsitory has been configured with Azure DevOps release pipeline:
https://dev.azure.com/1variety/Panadda/_release?definitionId=2

This pipeline gets executed when above build pipeline is completed successfully.

The pipeline has been set to public views only. Unauthorized user cannot edit, manange, delete.

The pipeline will deploy to https://panadda-webapi.azurewebsites.net

# Add CD pipeline with your own Azure DevOps
Add a new release pipeline in your Azure DevOps portal. select the 'Hosted Ubuntu 1604' as an agent pool. Add an Azure CLI step then select your Azure subscription. Add inline script below:

az webapp config container set -n panadda-webapi -g public -c webapi.azurecr.io/panadda-hewett/webapi:$(Build.BuildId)

# Risks associated
1. If the Github repository name has been changed, the build pipeline connections to Github may break
2. The Build piepline has been configured to run on Azure hosted agent. The agent will get temporary created and will be removed once completed. This could result to no build caches.
3. The build pipeline can work with 1 brunch at the time. It will get complicated to work with multiple brunches or results to multiple pieplines.
