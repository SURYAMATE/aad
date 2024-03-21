import { Fade, LinearProgress, styled } from "@mui/material"
import React, { PropsWithChildren } from "react"

const StyledLinearProgress = styled(LinearProgress)({
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
})

const StyledPageContainer = styled("div", { target: "PageContainer-root" })({
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 30,
    paddingTop: 10,
    overflow: "auto"
})
const StyledWrapper = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column"
})

interface Props extends PropsWithChildren {
    loading: boolean
}

export default function PageContainer({ children, loading = false }: Props) {
    return (
        <StyledPageContainer>
            <Fade in={loading} timeout={{ exit: 1000 }}>
                <StyledLinearProgress color="primary" />
            </Fade>
            <StyledWrapper>{children}</StyledWrapper>
        </StyledPageContainer>
    )
}
