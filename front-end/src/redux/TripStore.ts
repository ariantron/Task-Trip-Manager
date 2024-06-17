import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Trip, { SelectedTrip } from '../types/Trip.ts';
import FetchStatus from "../enums/FetchStatus.ts";
import Constants from "../enums/Constants.ts";

interface TripState {
    trips: Trip[];
    selectedTrip: SelectedTrip | null;
    status: FetchStatus;
    error: string | null;
}

const initialState: TripState = {
    trips: [],
    selectedTrip: null,
    status: FetchStatus.IDLE,
    error: null,
};

export const fetchTrips = createAsyncThunk('trips/fetchTrips', async () => {
    const response = await axios.get(`${Constants.API_URL}/trips`);
    return response.data;
});

export const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        setSelectedTrip: (state, action) => {
            state.selectedTrip = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrips.pending, (state) => {
                state.status = FetchStatus.LOADING;
            })
            .addCase(fetchTrips.fulfilled, (state, action) => {
                state.status = FetchStatus.SUCCEEDED;
                state.trips = action.payload;
            })
            .addCase(fetchTrips.rejected, (state, action) => {
                state.status = FetchStatus.FAILED;
                state.error = action.error.message || null;
            });
    },
});

export const { setSelectedTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
