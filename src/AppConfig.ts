import { Configuration, BrowserCacheLocation, LogLevel } from "@azure/msal-browser"

export interface IAppConfig {
    date: string
    version: string
    scopes: string[]
    msalConfig: Configuration
}

export default {
    date: "__APPCONFIG_DATE__",
    version: "__APPCONFIG_VERSION__",

    scopes: ["https://graph.microsoft.com/.default"],
    msalConfig: {
        auth: {
            clientId: "",
            authority: "",
            redirectUri: ""
        },
        cache: {
            cacheLocation: BrowserCacheLocation.SessionStorage, // This configures where your cache will be stored
            storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
        },
        system: {
            loggerOptions: {
                logLevel: LogLevel.Error,
                loggerCallback: (level, message, containsPii) => {
                    if (containsPii) {
                        return
                    }

                    switch (level) {
                        case LogLevel.Error:
                            console.error(message)
                            return
                        case LogLevel.Info:
                            console.info(message)
                            return
                        case LogLevel.Verbose:
                            console.debug(message)
                            return
                        case LogLevel.Warning:
                            console.warn(message)
                            return
                    }
                }
            }
        }
    }
} as IAppConfig
