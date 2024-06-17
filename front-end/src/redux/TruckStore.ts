import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Truck from '../types/Truck.ts';
import FetchStatus from "../enums/FetchStatus.ts";
import Constants from "../enums/Constants.ts";

interface TruckState {
    trucks: Truck[];
    status: FetchStatus;
    error: string | null;
}

const initialState: TruckState = {
    trucks: [],
    status: FetchStatus.IDLE,
    error: null,
};

export const fetchTrucks = createAsyncThunk('trucks/fetchTrucks', async () => {
    const response = await axios.get(`${Constants.API_URL}/trucks`);
    return response.data;
});

export const trucksSlice = createSlice({
    name: 'trucks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrucks.pending, (state) => {
                state.status = FetchStatus.LOADING;
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => {
                state.status = FetchStatus.SUCCEEDED;
                state.trucks = action.payload;
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.status = FetchStatus.FAILED;
                state.error = action.error.message || null;
            });
    },
});

export default trucksSlice.reducer;
