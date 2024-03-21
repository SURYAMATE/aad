import { CircularProgress } from "@mui/material"
import React from "react"

export default function PageLoading() {
    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <CircularProgress disableShrink />
            <strong
                style={{
                    color: "#CCCCD4",
                    paddingTop: 20
                }}
            >
                Loading...
            </strong>
        </div>
    )
}
