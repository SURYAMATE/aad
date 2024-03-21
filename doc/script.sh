#   OIDC DEV: AppID                     703c74ad-f2a3-4be6-bcfc-c32ff006ca3b
#   OIDC DEV: PrincipalID               d07ca99d-c67f-4710-9b3e-506fd2b450f7
#   OIDC DEV: AppRole 'oidcdev.read'    fabe5f24-6c7a-45fa-86b0-90d7386521a8

#   OIDC DEV CLIENT: AppID          8a26a3fa-7fad-4300-b84e-17cd442b2d99
#   OIDC DEV CLIENT: PrincipalID    23417103-c598-4458-a005-12e868ef04f1

#   NORM DEV: AppID         2d139c90-d120-4736-a149-b4fcefd71f20
#   NORM DEV: PrincipalID   99445bbe-3d38-4450-83e9-8e8e7dd894e3


### GET ServicePrincipal
GET https://graph.microsoft.com/v1.0/servicePrincipals(appId='{8a26a3fa-7fad-4300-b84e-17cd442b2d99}')

### GRANT APP ROLE 'PIM-Data-PlaygroundRead' TO 'NORM DEV'
POST https://graph.microsoft.com/v1.0/servicePrincipals/5056471b-fa1d-4bf2-8241-7e3f92c644ac/appRoleAssignedTo

{
    "principalId": "6364e520-436f-45fc-943c-6a7e317ca1b9",
    "resourceId": "d07ca99d-c67f-4710-9b3e-506fd2b450f7",
    "appRoleId": "fabe5f24-6c7a-45fa-86b0-90d7386521a8"
}

### CONFIRM APP ROLE ASSIGNMENT
GET https://graph.microsoft.com/v1.0/servicePrincipals/d07ca99d-c67f-4710-9b3e-506fd2b450f7/appRoleAssignedTo

### Revoke an app role assignment from a client service principal
DELETE https://graph.microsoft.com/v1.0/servicePrincipals/d07ca99d-c67f-4710-9b3e-506fd2b450f7/appRoleAssignedTo/vltEmTg9UESD6Y6OfdiU4ydttx4JAWFAg8Zsjr8nVd8


### https://auth-we02.mdm.stibosystems.com/auth/realms/siemensde-pimdev/PIM-Data-DEV-ReadAll

/servicePrincipals(appId='{2d139c90-d120-4736-a149-b4fcefd71f20}')/appRoleAssignedTo


### https://graph.microsoft.com/v1.0/servicePrincipals/{99445bbe-3d38-4450-83e9-8e8e7dd894e3}/appRoleAssignments
{
    "principalId": "99445bbe-3d38-4450-83e9-8e8e7dd894e3",
    "resourceId": "d07ca99d-c67f-4710-9b3e-506fd2b450f7",
    "appRoleId": "fabe5f24-6c7a-45fa-86b0-90d7386521a8"
}
