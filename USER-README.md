# EntraID Authentication and Authorization Setup

## Introduction

This guide explains how to organize and create roles in EntraID for using Authentication and Authorization processes via EntraID and their app roles.

## Process Diagram

![OverallAuthProcess.svg](doc%2FOverallAuthProcess.svg)

## Consumer Prerequisites

Before assigning specific roles in EntraID, it is essential to ensure that the consuming application that intends to access the producing service, has its own application registered in EntraID. This registration process involves creating a new app integration via the Self-Service Portal.

#### Steps to Create a New App Integration:

1. **Create a New App Integration in Self-Service Portal:**
    - Visit the [Self-Service Portal](https://myadpro-services.siemens.com/applications).
    - Follow the instructions provided to create a new app integration for your application.


2. **Configure Your App Integration in Azure AD:**
    - After creating the app integration in the Self-Service Portal, proceed to configure it in Azure AD.
    - Configure the necessary settings and permissions for your application within Azure AD.


3. **Communicate App ID:**
    - Once the app integration is set up and configured, communicate the generated App ID to the respective service or team responsible for assigning specific rights.
    - This App ID will be used to link your application with the specific roles and permissions required for your use case.

For more detailed information on the registration process and configuration steps, please refer to the [official documentation](https://wiki.siemens.com/pages/viewpage.action?pageId=386471116).

![ConsumerPreparationProcess.png](doc%2FConsumerPreparationProcess.png)

## Producer Prerequisites

Before assigning specific roles in EntraID, it is essential to ensure that the producing application that intends to grant these roles has its own application registered in EntraID. This registration process involves creating a new app integration via the Self-Service Portal.

#### Steps to Create a New App Integration:

1. **Create a New App Integration in Self-Service Portal:**
   - Visit the [Self-Service Portal](https://myadpro-services.siemens.com/applications).
   - Follow the instructions provided to create a new app integration for your application.

For more detailed information on the registration process and configuration steps, please refer to the [official documentation](https://wiki.siemens.com/pages/viewpage.action?pageId=386471116).

2. **Configure Your App Integration in Azure AD:**
   - After creating the app integration in the Self-Service Portal, proceed to configure it in Azure AD.
   - Configure the necessary settings and permissions for your application within Azure AD.


3. **Navigate to your Application** 
   - Navigate to Identity > Applications > App Registrations, and then select All Applications.
   - Choose All Applications to display a list of your applications. If the application is not displayed in the list, you can use filters at the top of the All Applications list to narrow down the list's content. You can also scroll down the list to find your application. 
   - Select the application to which you want to add an app role.

   
4. **Add Roles**
   - Define your Role and Rights concept. According to that, you can now define your permissions by: 
     - Click on APP Roles > Create App Role
     - Create App Role
       - Display Name: The name of the role that will be displayed to users.
       - Description: A description of the role.
       - Allowed Member Types: Select the member types that can be assigned to this role.
       - Value: The value of the role that will be included in the token.

       
5. **Assign the Role to the Application**
   - After creating the role, you can now assign this to the requested application by: 
   - Open AppGuardian 

## Urgent Note:
- **Please note that the role assignment process is only available for the EntraID Integrated Applications.**
- **To be secure in terms of vulnerabilities, each producer needs to validate the token for the right audience (producing application ID) AND roles (producing application roles)**