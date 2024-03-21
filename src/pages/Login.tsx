import { Grid, Paper, Button, styled } from "@mui/material"
import { useMsal } from "@azure/msal-react"
import React, { useState } from "react"
import AppConfig from "@app/AppConfig"

const StyledRoot = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.sidebar
}))
const StyledPaper = styled(Paper)({
    width: 400,
    padding: 30
})

export default function Login() {
    const [error, setError] = useState<string>(undefined)
    const { instance } = useMsal()

    const handleClick = () => {
        setError(undefined)

        instance
            .loginRedirect({
                scopes: AppConfig.scopes,
                redirectUri: AppConfig.msalConfig.auth.redirectUri
            })
            .catch((e) => {
                setError(e.message)
                console.error(e)
            })
    }

    return (
        <StyledRoot>
            <StyledPaper>
                <Grid spacing={4} container>
                    <Grid xs={12} item>
                        <h1>AppGuardian</h1>
                    </Grid>
                    <Grid xs={12} item>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </Grid>
                    <Grid xs={12} item>
                        <Button variant="contained" onClick={handleClick} fullWidth>
                            Login
                        </Button>
                    </Grid>
                    {error && (
                        <Grid xs={12} item>
                            <span>{error}</span>
                        </Grid>
                    )}
                </Grid>
            </StyledPaper>
        </StyledRoot>
    )
}
