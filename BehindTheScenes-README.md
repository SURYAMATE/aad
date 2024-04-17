## Technical Integration Process for Authentication and Authorization using GraphExplorer APIs

### Overview
This document outlines the technical integration process for enabling Authentication and Authorization within an Electron frontend application using Microsoft Graph Explorer APIs. The process involves steps for user authentication, retrieving application details, managing roles, and assigning roles to specific applications.

### Process
![Technical-Process.svg](doc%2FTechnical-Process.svg)

### Steps

#### 1. Login to Application via EntraID (OAuth2)
- Utilize EntraID OAuth2 authentication mechanism to securely authenticate users into the application.

#### 2. Retrieve Owned Applications
- Query Graph API to fetch all applications owned by the authenticated authority.
  ```http
  GET https://graph.microsoft.com/v1.0/me/ownedObjects/microsoft.graph.application?$select=id,appId,displayName,description,appRoles
  ```

#### 3. Select Service Principal IDs
- Use the obtained appId to retrieve Service Principal IDs for the producing application.
  ```http
  GET https://graph.microsoft.com/v1.0/servicePrincipals?$filter=appId eq 'appId'
  ```

#### 4. Obtain Available Roles

- Fetch the available roles for the specific application to determine which roles can be assigned.

#### 5. Assign Role to Application
- Assign a specific role to a given application by making a POST request with required parameters.
```http
  POST https://graph.microsoft.com/v1.0/servicePrincipals/{APPID}/appRoleAssignedTo
{
    "principalId": "PRINCIPALID",
    "resourceId": "RESOURCEID",
    "appRoleId": "APPROLEID"
}
  ```

#### 6. Verify Role Assignment
- Verify the role assignment by querying the assigned roles for the application.
```http
  GET https://graph.microsoft.com/v1.0/servicePrincipals/{APPID}/appRoleAssignedTo
```

#### 7. Revoke Role Assignment
- Revoke a role assignment by deleting the role assignment.
```http
  DELETE https://graph.microsoft.com/v1.0/servicePrincipals/{APPID}/appRoleAssignedTo/{ID}
```

## Conclusion
This integration process enables secure authentication and authorization mechanisms within the Electron frontend application via GraphExplorer APIs, ensuring proper access control and management of roles assigned to various applications. Following these steps ensures a robust and secure authentication and authorization system.