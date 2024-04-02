import { Button, Dialog, DialogActions, DialogContent, DialogTitle, styled } from "@mui/material"
import SearchAppIdTextField from "@app/views/application/SearchAppIdTextField"
import { Application, AppRole, AppRoleAssignment } from "@app/api/types"
import MicrosoftGraph from "@app/api/MicrosoftGraph"
import React, { useEffect, useState } from "react"
import color from "color"

const StyledDialog = styled(Dialog)({
    "& .MuiDialog-paper": { width: "80%", maxHeight: 435 },
    "& .MuiDialogTitle-root": {
        display: "flex",
        flexDirection: "column"
    },
    "& .MuiDialogContent-root": {
        padding: 20
    }
})

const StyledConsumer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    height: 220,
    paddingTop: 40
})

const StyledError = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: 10,
    color: theme.palette.error.main,
    borderTop: `solid 1px ${color(theme.palette.error.main).fade(0.2).toString()}`,
    borderRadius: 5,
    backgroundColor: color(theme.palette.error.main).fade(0.95).toString()
}))

interface State {
    open: boolean
    application?: Application
    appRole?: AppRole
    consumer?: Application
    appRoleAssignment?: AppRoleAssignment
    successful: boolean
    error?: string
}

interface Props {
    open: boolean
    application?: Application
    appRole?: AppRole
    onClose: () => void
}

export default function AssignRoleDialog({ open, application, appRole, onClose }: Props) {
    const [state, setState] = useState<State>({
        open,
        application,
        appRole,
        consumer: undefined,
        appRoleAssignment: undefined,
        successful: false,
        error: undefined
    })
    useEffect(
        () =>
            setState({
                open,
                application,
                appRole,
                consumer: undefined,
                appRoleAssignment: undefined,
                successful: false,
                error: undefined
            }),
        [open, application, appRole]
    )

    const handleSelectConsumer = (app: Application, assignments: AppRoleAssignment[]) => {
        setState((prevState) => ({
            ...prevState,
            consumer: app,
            appRoleAssignment: assignments.find(({ appRoleId }) => appRoleId == appRole.id),
            successful: false,
            error: undefined
        }))
    }

    const handleAssignRole = () => {
        MicrosoftGraph.assignRole(application, state.consumer, appRole)
            .then((response) =>
                setState((prevState) => ({
                    ...prevState,
                    successful: true,
                    error: undefined
                }))
            )
            .catch((e) =>
                setState((prevState) => ({
                    ...prevState,
                    successful: false,
                    error: `You must be the owner of the EntraID application "${application.displayName}"`
                }))
            )
    }
    const handleRemoveRole = () => {
        MicrosoftGraph.removeAppRoleAssignment(state.consumer, state.appRoleAssignment)
            .then((response) =>
                setState((prevState) => ({
                    ...prevState,
                    successful: true,
                    error: undefined
                }))
            )
            .catch((e) =>
                setState((prevState) => ({
                    ...prevState,
                    successful: false,
                    error: `You must be the owner of the EntraID application "${application.displayName}"`
                }))
            )
    }

    return (
        <StyledDialog maxWidth="xs" open={open}>
            <DialogTitle>
                <strong>{state.appRole ? state.appRole.displayName : "---"}</strong>
                <span>{state.appRole ? state.appRole.id : "---"}</span>
            </DialogTitle>
            <DialogContent dividers>
                <SearchAppIdTextField onSelect={handleSelectConsumer} />
                <StyledConsumer>
                    {state.consumer && (
                        <>
                            <strong>{state.consumer.displayName}</strong>
                            <span style={{ paddingBottom: 10 }}>{state.consumer.appId}</span>

                            {state.error ? (
                                <StyledError>
                                    <strong>Error</strong>
                                    <span>{state.error}</span>
                                </StyledError>
                            ) : state.successful ? (
                                <span>done</span>
                            ) : state.appRoleAssignment ? (
                                <Button color="error" variant="contained" onClick={handleRemoveRole}>
                                    remove role
                                </Button>
                            ) : (
                                <Button color="primary" variant="contained" onClick={handleAssignRole}>
                                    assign role
                                </Button>
                            )}
                        </>
                    )}
                </StyledConsumer>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </StyledDialog>
    )
}
