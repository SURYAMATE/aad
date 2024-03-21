import { AccountInfo } from "@azure/msal-browser"
import { Button, styled } from "@mui/material"
import { useMsal } from "@azure/msal-react"
import AppConfig from "@app/AppConfig"
import React from "react"

// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

const StyledButton = styled(Button)(({ theme }) => ({
    height: 70,
    fontWeight: "normal",
    textTransform: "none",
    lineHeight: "1.5em",
    borderRadius: 0,

    "& svg": {
        fill: theme.palette.text.primary,
        width: 32,
        height: 32
    }
}))
const StyledContent = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 10,

    "& strong": {
        color: theme.palette.primary.main
    },
    "& span": {
        color: theme.palette.text.primary
    }
}))

interface Props {
    accountInfo: AccountInfo
}
export default function HeaderUser({ accountInfo }: Props) {
    const { instance } = useMsal()

    const logoutFunc = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: AppConfig.msalConfig.auth.redirectUri
        })
    }

    return (
        <StyledButton onClick={logoutFunc}>
            <AccountCircleIcon />
            <StyledContent>
                <strong>{accountInfo.name}</strong>
                <span>{accountInfo.username}</span>
            </StyledContent>
        </StyledButton>
    )
}
