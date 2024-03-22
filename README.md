# Project Name

## Overview

This project delivers a Frontend Application that integrates OAuth2 authentication against our EntraID Integration. Upon successful login, users can grant other applications access to their own services based on role and scopes approaches.

## Technology Stack 

The project is built using the following technologies:

| Technology     | Description                                                                                                    |
|----------------|----------------------------------------------------------------------------------------------------------------|
| **TypeScript** | A superset of JavaScript that adds static types to the language, enhancing code quality and maintainability.  |
| **React**      | A JavaScript library for building user interfaces, offering a component-based architecture for efficient UI development. |
| **AWS S3**     | Amazon Simple Storage Service (S3) provides scalable cloud storage for hosting static web assets like HTML, CSS, and JavaScript. |

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

Florian Burger (Valantic) - Development
Daniel Faber - Architecture and Technical Process 
Sven Legl - Architecture and Technical Process

