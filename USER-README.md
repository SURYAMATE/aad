# EntraID Authentication and Authorization Setup

## Introduction

This guide explains how to organize and create roles in EntraID for using Authentication and Authorization processes via EntraID and their app roles.

## Consumer Prerequisites

Before assigning specific roles in EntraID, it is essential to ensure that each application that intends to grant these roles has its own application registered in EntraID. This registration process involves creating a new app integration via the Self-Service Portal.

#### Steps to Create a New App Integration:

1. **Create a New App Integration in Self-Service Portal:**
    - Visit the [Self-Service Portal](https://myadpro-services.siemens.com/applications).
    - Follow the instructions provided to create a new app integration for your application.

2. **Configure Your App Integration in Azure AD:**
    - After creating the app integration in the Self-Service Portal, proceed to configure it in Azure AD.
    - Configure the necessary settings and permissions for your application within Azure AD.

3. **Communicate App ID via TiMA:**
    - Once the app integration is set up and configured, communicate the generated App ID via TiMA (Siemens internal messaging system) to the respective service or team responsible for assigning specific rights.
    - This App ID will be used to link your application with the specific roles and permissions required for your use case.

For more detailed information on the registration process and configuration steps, please refer to the [official documentation](https://wiki.siemens.com/pages/viewpage.action?pageId=386471116).

![ConsumerPreparationProcess.png](doc%2FConsumerPreparationProcess.png)

## Producer Responsibilities and Process

### Assigning App Roles in Microsoft Entra Admin Center

To assign app roles to a client application using the Microsoft Entra Admin Center, follow these steps:

1. Sign in to the Microsoft Entra Admin Center as a Cloud Application Administrator.
2. Navigate to Identity > Applications > App Registrations, and then select All Applications.
3. Choose All Applications to display a list of your applications. If the application is not displayed in the list, you can use filters at the top of the All Applications list to narrow down the list's content. You can also scroll down the list to find your application.
4. Select the application to which you want to add an app role.
5. Click on API Permissions > Add a permission.
6. Select the My APIs tab and then select the app for which you have defined app roles.
7. Choose the roles under Permission that you want to assign.
8. Click the Add permissions button to complete the addition of the role(s).
