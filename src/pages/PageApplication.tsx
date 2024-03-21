import { fetch as fetchApplications } from "@app/store/applicationSlice"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import {
    Breadcrumbs,
    Card,
    CardContent,
    CardHeader,
    Skeleton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material"
import AssignRoleDialog from "@app/views/application/AssignRoleDialog"
import { Application, AppRole } from "@app/api/types"
import MicrosoftGraph from "@app/api/MicrosoftGraph"
import React, { useEffect, useState } from "react"
import { PageContainer } from "@app/components"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

// Icons
import HomeIcon from "@mui/icons-material/Home"

const StyledCard = styled(Card)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",

    "& .MuiCardContent-root": {
        flex: 1,
        padding: 0
    }
}))
const StyledAppId = styled("span")({
    whiteSpace: "nowrap"
})

interface DialogState {
    open: boolean
    application?: Application
    appRole?: AppRole
}

export default function PageApplication() {
    const params = useParams<{ appId: string }>()

    const applications: Application[] = useAppSelector((state) => state.application.applications)
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState<boolean>(true)
    const [application, setApplication] = useState<Application>(undefined)

    const [dialogState, setDialogState] = useState<DialogState>({
        open: false
    })

    useEffect(() => {
        setLoading(true)

        if (applications.length == 0) {
            MicrosoftGraph.fetchApplications().then((response) => {
                dispatch(fetchApplications(response))
            })
        } else {
            setApplication(applications.find(({ appId }) => params.appId == appId))
            setLoading(false)
        }
    }, [applications, params.appId])

    const handleClick = (role: AppRole) => {
        setDialogState({
            open: true,
            application: application,
            appRole: role
        })
    }

    return (
        <>
            <PageContainer loading={loading}>
                <Breadcrumbs>
                    <Link to="/dashboard">
                        <HomeIcon />
                    </Link>
                    <Link to="/dashboard">Applications</Link>
                    <Typography color="text.primary">{params.appId}</Typography>
                </Breadcrumbs>
                <StyledCard>
                    <CardHeader
                        title={application ? <strong>{application.displayName}</strong> : <Skeleton width={200} />}
                        subheader={application ? <span>{application.appId}</span> : <Skeleton width={100} />}
                    />
                    <CardContent>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell component="th">Role</TableCell>
                                        <TableCell component="th">Value</TableCell>
                                        <TableCell component="th">MemberTypes</TableCell>
                                        <TableCell component="th">RoleId</TableCell>
                                    </TableRow>
                                </TableHead>
                                {application && (
                                    <TableBody>
                                        {application.appRoles.map((role) => (
                                            <TableRow key={role.id} onClick={() => handleClick(role)} hover>
                                                <TableCell>{role.displayName}</TableCell>
                                                <TableCell>{role.value}</TableCell>
                                                <TableCell>{role.allowedMemberTypes.join(", ")}</TableCell>
                                                <TableCell>
                                                    <StyledAppId>{role.id}</StyledAppId>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        {application.appRoles.length == 0 && (
                                            <TableRow>
                                                <TableCell colSpan={4} style={{ textAlign: "center" }}>
                                                    No roles found
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                    </CardContent>
                </StyledCard>
            </PageContainer>
            <AssignRoleDialog
                open={dialogState.open}
                application={dialogState.application}
                appRole={dialogState.appRole}
                onClose={() => setDialogState((prevState) => ({ ...prevState, open: false }))}
            />
        </>
    )
}
