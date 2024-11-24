import { createSlice } from '@reduxjs/toolkit';
import { DashboardInitialState } from '../constant';

const initialState: DashboardInitialState = {
    value: 1
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const {setValue} = dashboardSlice.actions
export default dashboardSlice.reducer