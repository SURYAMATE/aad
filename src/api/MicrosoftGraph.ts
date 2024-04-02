import { Application, AppRole, AppRoleAssignment } from "@app/api/types"
import axios from "axios"

const endpoint = "https://graph.microsoft.com/v1.0"

export default abstract class MicrosoftGraph {
    public static fetchMe(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            axios
                .get(`${endpoint}/me`)
                .then((response) => resolve(response.data))
                .catch(reject)
        })
    }

    public static fetchAppRoleAssignments(application: Application): Promise<AppRoleAssignment[]> {
        return new Promise((resolve, reject) => {
            axios
                .get<{ value: AppRoleAssignment[] }>(
                    `${endpoint}/servicePrincipals(appId='${application.appId}')/appRoleAssignments`
                )
                .then(({ data }) => resolve(data.value))
                .catch(reject)
        })
    }

    public static removeAppRoleAssignment(
        application: Application,
        appRoleAssignment: AppRoleAssignment
    ): Promise<AppRoleAssignment[]> {
        return new Promise((resolve, reject) => {
            axios
                .delete<{ value: AppRoleAssignment[] }>(
                    `${endpoint}/servicePrincipals(appId='${application.appId}')/appRoleAssignments/${appRoleAssignment.id}`
                )
                .then(({ data }) => resolve(data.value))
                .catch(reject)
        })
    }

    public static fetchServicePrincipalId(application: Application): Promise<string> {
        return new Promise((resolve, reject) => {
            axios
                .get<{ id: string }>(`${endpoint}/servicePrincipals(appId='${application.appId}')?$select=id`)
                .then(({ data }) => resolve(data.id))
                .catch(reject)
        })
    }

    public static async assignRole(
        application: Application,
        consumer: Application,
        appRole: AppRole
    ): Promise<Application> {
        const applicationPrincipalId = await this.fetchServicePrincipalId(application),
            consumerPrincipalId = await this.fetchServicePrincipalId(consumer)

        return new Promise((resolve, reject) => {
            axios
                .post<any>(`${endpoint}/servicePrincipals/${applicationPrincipalId}/appRoleAssignedTo`, {
                    principalId: consumerPrincipalId,
                    resourceId: applicationPrincipalId,
                    appRoleId: appRole.id
                })
                .then((response) => resolve(response.data))
                .catch(reject)
        })
    }

    public static fetchApplication(appId: string): Promise<Application> {
        return new Promise((resolve, reject) => {
            axios
                .get<Application>(
                    `${endpoint}/servicePrincipals(appId='${appId}')?$select=id,appId,displayName,description,appRoles`
                )
                .then(({ data }) => resolve(data))
                .catch(reject)
        })
    }

    public static fetchApplications(): Promise<Application[]> {
        return new Promise((resolve, reject) => {
            axios
                .get<{ "@odata.context": string; value: Application[] }>(
                    `${endpoint}/me/ownedObjects/microsoft.graph.application?$select=id,appId,displayName,description,appRoles`
                )
                .then((response) => resolve(response.data.value))
                .catch(reject)
        })
    }
}
