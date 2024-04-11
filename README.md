# Table of Contents

- [Project Name](#project-name)
   - [Overview](#overview)
   - [Technology Stack](#technology-stack)
   - [Architecture](#architecture)
   - [Getting Started](#getting-started)
   - [Basic Process Overview](#basic-process-overview)
   - [Contributors](#contributors)
  
# Project Name

## Overview

This project delivers a Frontend Application that integrates OAuth2 authentication against our EntraID Integration. Upon successful login, users can grant other applications access to their own services based on role and scopes approaches.

## Technology Stack 

This project is based on a **single-page application (SPA) architecture**, with the frontend implemented using TypeScript and React. The application leverages OAuth2 for user authentication and authorization, enabling secure access to protected resources.
Here you find a short summary: 

| Technology     | Description                                                                                                    |
|----------------|----------------------------------------------------------------------------------------------------------------|
| **TypeScript** | A superset of JavaScript that adds static types to the language, enhancing code quality and maintainability.  |
| **React**      | A JavaScript library for building user interfaces, offering a component-based architecture for efficient UI development. |
| **AWS S3**     | Amazon Simple Storage Service (S3) provides scalable cloud storage for hosting static web assets like HTML, CSS, and JavaScript. |

By leveraging TypeScript and React for frontend development and hosting the application on an AWS S3 bucket, the project benefits from type safety, efficient UI development, and reliable cloud hosting infrastructure.

## Architecture
This architecture deploys a frontend application built with TypeScript and React on AWS infrastructure. The React application is hosted on Amazon S3 for static website hosting, while Amazon CloudFront serves as a global content delivery network for distributing assets. HTTPS encryption is provided by AWS Certificate Manager, ensuring secure communication with users. This setup offers scalability, reliability, and cost-effectiveness, while TypeScript and React enhance developer productivity and flexibility in building modern user interfaces.

![basicArchitecture.svg](doc%2FbasicArchitecture.svg)

## Backend Authentication and Authorization Process
How to use permissions granted by custom roles in Microsoft Entra ID to address your application management needs? In Microsoft Entra ID, you can delegate Application creation and management permissions. 


## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: Clone this GitLab repository to your local machine.

   ```bash
   git clone <repository_url>
   ```

2. **Install the Dependencies**: Install the project dependencies by running the following command in the project root directory.

   ```bash
    cd <project_directory>
    npm install
   ```

3. **Run the Application**: Run the application by executing the following command in the project root directory.

   ```bash
    npm start
    ```

4. **Access the Application**: Once the server is running, access the application in your web browser by navigating to http://localhost:3000.

## Basic Process Overview

The core functionality of the application is implemented in the App.tsx file. Here's a brief overview of the integration:

1. **Authentication Handling**:
   * The application uses the @azure/msal-react library for authentication via OAuth2.
   * Upon initialization, the MSAL instance is created using the configuration provided in AppConfig.msalConfig.
2. **Router Configuration**:
   * The application utilizes the react-router-dom library for routing.
   * Routes are defined based on user authentication status. Authenticated users are directed to the Router component, while unauthenticated users are directed to the Unauthenticated component.
3. **Token Management**:
   * Upon successful authentication, the user's access token is acquired silently using MSAL's acquireTokenSilent method.
   * The acquired access token is then attached to the HTTP headers for subsequent API requests using Axios.
4. **Automatic Token Refresh**:
   * To ensure uninterrupted access, the application periodically refreshes the access token by acquiring a new token silently every 30 minutes.
5. **Views and Lazy Loading**:
   Views such as Login, Dashboard, PageApplication, and NotFound are lazily loaded using React's lazy loading feature.

## Contributors

| Contact                       | Function                           |
|-------------------------------|------------------------------------|
| **Florian Burger (Valantic)** | Development                        |
| **Daniel Faber**              | Architecture and Technical Process |
| **Sven Legl**                 | Architecture and Technical Process |



