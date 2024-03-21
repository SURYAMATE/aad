import InputAdornment from "@mui/material/InputAdornment"
import { TextField, IconButton } from "@mui/material"
import MicrosoftGraph from "@app/api/MicrosoftGraph"
import SearchIcon from "@mui/icons-material/Search"
import { Application, AppRoleAssignment } from "@app/api/types"
import React, { useState } from "react"

interface Props {
    onSelect: (consumer: Application | undefined, appRoleAssignments: AppRoleAssignment[]) => void
}

export default function SearchAppIdTextField({ onSelect }: Props) {
    const [value, setValue] = useState<string>("")

    const handleSearch = () => {
        setValue("")

        MicrosoftGraph.fetchApplication(value)
            .then((application) => {
                MicrosoftGraph.fetchAppRoleAssignments(application)
                    .then((assignments) => onSelect(application, assignments))
                    .catch(() => onSelect(undefined, []))
            })
            .catch(() => onSelect(undefined, []))
    }

    return (
        <TextField
            label="Search for Client ID"
            variant="outlined"
            value={value}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleSearch()
                }
            }}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton edge="end" onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            fullWidth
        />
    )
}
