import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Driver from '../types/Driver.ts';
import FetchStatus from "../enums/FetchStatus.ts";
import Constants from "../enums/Constants.ts";

interface DriverState {
    drivers: Driver[];
    status: FetchStatus;
    error: string | null;
}

const initialState: DriverState = {
    drivers: [],
    status: FetchStatus.IDLE,
    error: null,
};

export const fetchDrivers = createAsyncThunk('drivers/fetchDrivers', async () => {
    const response = await axios.get(`${Constants.API_URL}/drivers`);
    return response.data;
});

export const driversSlice = createSlice({
    name: 'drivers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrivers.pending, (state) => {
                state.status = FetchStatus.LOADING;
            })
            .addCase(fetchDrivers.fulfilled, (state, action) => {
                state.status = FetchStatus.SUCCEEDED;
                state.drivers = action.payload;
            })
            .addCase(fetchDrivers.rejected, (state, action) => {
                state.status = FetchStatus.FAILED;
                state.error = action.error.message || null;
            });
    },
});

export default driversSlice.reducer;
