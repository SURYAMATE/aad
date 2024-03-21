import { GlobalStyles as DefaultGlobalStyles } from "@mui/material"
import Theme from "./MaterialTheme"
import React from "react"

// This will ensure that the <style> tag generated would not recalculate on each render.
const inputGlobalStyles = (
    <DefaultGlobalStyles
        styles={(theme) => ({
            "*": {
                padding: 0,
                margin: 0,

                boxSizing: "border-box",

                appearance: "none",
                "-moz-appearance": "none",
                "-webkit-appearance": "none",

                "-webkit-overflow-scrolling": "touch",
                "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",

                "&:focus": {
                    outline: "none"
                }
            },
            "body, html": {
                width: "100%",
                height: "100%"
            },
            html: {
                touchAction: "none",

                overflow: "hidden"
            },
            body: {
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,

                color: Theme.palette.text.primary,
                fontSmoothing: "antialiased",
                backgroundColor: "rgba(247 247 247)",
                overflow: "auto"
            },
            p: {
                padding: "5px 0"
            },
            "#app": {
                position: "relative",
                width: "100%",
                height: "100%",

                display: "flex",
                flexDirection: "column",

                "-webkit-overflow-scrolling": "touch"
            } /* Placeholder */,
            "input::-webkit-input-placeholder": {
                color: "red",
                fontSize: 12,
                fontWeight: 300,
                fontStyle: "normal"
            },
            "input::-moz-placeholder": {
                fontSize: 12,
                fontWeight: 300,
                fontStyle: "normal"
            },
            "input:-ms-input-placeholder": {
                fontSize: 12,
                fontWeight: 300,
                fontStyle: "normal"
            },
            "textarea::-webkit-input-placeholder": {
                fontSize: 12,
                fontWeight: 300,
                fontStyle: "normal"
            },
            "textarea::-moz-placeholder": {
                fontSize: 12,
                fontWeight: 300,
                fontStyle: "normal"
            },
            "textarea:-ms-input-placeholder": {
                fontSize: 12,
                fontWeight: 300,
                fontStyle: "normal"
            }
        })}
    />
)

export default function GlobalStyles() {
    return inputGlobalStyles
}
