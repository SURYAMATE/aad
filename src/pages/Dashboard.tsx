import { fetch as fetchApplications } from "@app/store/applicationSlice"
import ApplicationsTable from "@app/views/dashboard/ApplicationsTable"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { Breadcrumbs, Typography } from "@mui/material"
import MicrosoftGraph from "@app/api/MicrosoftGraph"
import React, { useEffect, useState } from "react"
import { PageContainer } from "@app/components"
import { Application } from "@app/api/types"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

// Icons
import HomeIcon from "@mui/icons-material/Home"

export default function Dashboard() {
    const applications: Application[] = useAppSelector((state) => state.application.applications)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        MicrosoftGraph.fetchApplications()
            .then((response) => dispatch(fetchApplications(response)))
            .finally(() => setLoading(false))
    }, [])

    return (
        <PageContainer loading={loading}>
            <Breadcrumbs>
                <Link to="/dashboard">
                    <HomeIcon />
                </Link>
                <Typography color="text.primary">Applications</Typography>
            </Breadcrumbs>
            <ApplicationsTable applications={applications} onClick={({ appId }) => navigate(`/dashboard/${appId}`)} />
        </PageContainer>
    )
}
