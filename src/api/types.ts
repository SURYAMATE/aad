export type AllowedMemberTypes = "Application" | "User"

export interface AppRole {
    id: string
    displayName: string
    description: string
    origin: string
    value: string
    isEnabled: boolean
    allowedMemberTypes: AllowedMemberTypes[]
}

export interface AppRoleAssignment {
    id: string
    appRoleId: string
    createdDateTime: string
    deletedDateTime: string | null
    principalDisplayName: string
    principalId: string
    principalType: string
    resourceDisplayName: string
    resourceId: string
}

export interface Application {
    id: string
    appId: string
    displayName: string
    description: string
    appRoles: AppRole[]
}
