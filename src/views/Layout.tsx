import PageLoading from "@app/components/PageLoading"
import { Outlet } from "react-router-dom"
import React, { Suspense } from "react"
import { styled } from "@mui/material"
import Header from "./layout/Header"

const StyledStage = styled("div")({
    position: "relative",
    height: "calc(100vh - 70px)",
    display: "flex"
})

export default function Layout() {
    return (
        <>
            <Header />
            <StyledStage>
                <Suspense fallback={<PageLoading />}>
                    <Outlet />
                </Suspense>
            </StyledStage>
        </>
    )
}
