import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Application } from "@app/api/types"

// Define a type for the slice state
interface ApplicationState {
    applications: Application[]
}

// Define the initial state using that type
const initialState: ApplicationState = {
    applications: []
}

export const applicationSlice = createSlice({
    name: "application",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        fetch: (state, action: PayloadAction<Application[]>) => {
            state.applications = action.payload
        }
    }
})

export const { fetch } = applicationSlice.actions

export default applicationSlice.reducer
