import {configureStore} from "@reduxjs/toolkit";
import {tripsSlice} from "./TripStore.ts";
import {tasksSlice} from "./TaskStore.ts";
import {trucksSlice} from "./TruckStore.ts";
import {driversSlice} from "./DriverStore.ts";

export const BASE_URL = 'http://localhost:8000';

const reducer = {
    trips: tripsSlice.reducer,
    tasks: tasksSlice.reducer,
    trucks: trucksSlice.reducer,
    drivers: driversSlice.reducer
};

const AppStore = configureStore({
    reducer,
});

export type AppDispatch = typeof AppStore.dispatch;

export default AppStore;