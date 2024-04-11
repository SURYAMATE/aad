import { StyledEngineProvider } from "@mui/styled-engine-sc"
import AppConfig, { IAppConfig } from "./AppConfig"
import GlobalStyles from "@app/theme/GlobalStyles"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@mui/material"
import Theme from "@app/theme/MaterialTheme"
import React, { StrictMode } from "react"
import { Provider } from "react-redux"
import store from "@app/store/store"
import moment from "moment"
import App from "./App"

moment.locale("de")

class GraphClient {
    public static init(options: IAppConfig): void {
        AppConfig.msalConfig.auth.clientId = options.msalConfig.auth.clientId
        AppConfig.msalConfig.auth.authority = options.msalConfig.auth.authority
        AppConfig.msalConfig.auth.redirectUri = options.msalConfig.auth.redirectUri

        const root = createRoot(document.getElementById("app") as Element)
        root.render(
            <StrictMode>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={Theme}>
                        <Provider store={store}>
                            <GlobalStyles />
                            <App />
                        </Provider>
                    </ThemeProvider>
                </StyledEngineProvider>
            </StrictMode>
        )
    }
}

declare global {
    interface Window {
        GraphClient: GraphClient
    }
}

window.GraphClient = GraphClient
