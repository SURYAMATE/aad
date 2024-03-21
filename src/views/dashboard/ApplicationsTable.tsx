import React, { CSSProperties, useEffect, useState } from "react"
import {
    Card,
    CardActions,
    CardContent,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material"
import { Application } from "@app/api/types"

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

interface State {
    count: number
    page: number
    rowsPerPage: number
    applications: Application[]
}

interface Props {
    applications: Application[]
    style?: CSSProperties
    onClick: (application: Application) => void
}

export default function ApplicationsTable({ applications, style, onClick }: Props) {
    const [state, setState] = useState<State>({
        count: applications.length,
        page: 0,
        rowsPerPage: 20,
        applications: applications
    })

    useEffect(
        () =>
            setState((prevState) => ({
                ...prevState,
                count: applications.length,
                page: 0,
                applications
            })),
        [applications]
    )

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setState((prevState) => ({
            ...prevState,
            page: newPage
        }))
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // @ts-ignore
        const value: number = parseInt(event.target.value, 10)

        setState((prevState) => ({
            ...prevState,
            page: 0,
            rowsPerPage: value
        }))
    }

    return (
        <StyledCard>
            <CardContent>
                <TableContainer style={style}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell component="th">Application</TableCell>
                                <TableCell component="th">Description</TableCell>
                                <TableCell component="th">AppId</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(state.rowsPerPage > 0
                                ? state.applications.slice(
                                      state.page * state.rowsPerPage,
                                      state.page * state.rowsPerPage + state.rowsPerPage
                                  )
                                : applications
                            ).map((application) => (
                                <TableRow key={application.appId} onClick={() => onClick(application)} hover>
                                    <TableCell>{application.displayName}</TableCell>
                                    <TableCell>{application.description ? application.description : "---"}</TableCell>
                                    <TableCell>
                                        <StyledAppId>{application.appId}</StyledAppId>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {state.applications.length == 0 && (
                                <TableRow>
                                    <TableCell colSpan={3} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
            <TablePagination
                component={CardActions}
                rowsPerPageOptions={[10, 20, 50]}
                colSpan={2}
                count={state.applications.length}
                rowsPerPage={state.rowsPerPage}
                page={state.page}
                style={{ justifyContent: "flex-end" }}
                slotProps={{
                    select: {
                        native: true
                    }
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </StyledCard>
    )
}
