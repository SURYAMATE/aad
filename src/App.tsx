import { IPublicClientApplication, PublicClientApplication } from "@azure/msal-browser"
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import React, { useEffect, useRef, useState } from "react"
import AppConfig from "@app/AppConfig"
import {
    AuthenticatedTemplate,
    MsalProvider,
    UnauthenticatedTemplate,
    useIsAuthenticated,
    useMsal
} from "@azure/msal-react"
import axios from "axios"

/* Views */
import Layout from "@app/views/Layout"

/* Lazy Loading */
const Login = React.lazy(() => import("./pages/Login")),
    Dashboard = React.lazy(() => import("./pages/Dashboard")),
    PageApplication = React.lazy(() => import("./pages/PageApplication")),
    NotFound = React.lazy(() => import("./pages/NotFound"))

const Router = () => {
    const isAuthenticated = useIsAuthenticated()
    const { instance, accounts } = useMsal()
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const getAccessToken = (instance: IPublicClientApplication) => {
        return new Promise<string>((resolve, reject) => {
            instance
                .acquireTokenSilent({
                    scopes: AppConfig.scopes
                })
                .then((tokenResponse) => {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${tokenResponse.accessToken}`
                })
                .catch((error) => console.log(error))
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            instance.setActiveAccount(accounts[0])

            getAccessToken(instance)

            // Get a new refresh token after 30 minutes
            const milliseconds = 30 * 60 * 1000
            const interval = setInterval(() => getAccessToken(instance), milliseconds)
            intervalRef.current = interval

            return () => {
                clearInterval(interval)
            }
        }
    }, [])

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate replace to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/:appId" element={<PageApplication />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const Unauthenticated = () => {
    const isAuthenticated = useIsAuthenticated()
    const { instance } = useMsal()

    useEffect(() => {
        instance.initialize().then((res) => console.log("initialized", res))
    }, [])

    return (
        <React.Suspense fallback={<div />}>
            <Login />
        </React.Suspense>
    )
}

export default function App() {
    const [msalInstance] = useState<PublicClientApplication>(new PublicClientApplication(AppConfig.msalConfig))

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                <Router />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Unauthenticated />
            </UnauthenticatedTemplate>
        </MsalProvider>
    )
}
