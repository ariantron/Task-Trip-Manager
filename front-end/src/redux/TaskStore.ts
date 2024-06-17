import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Task from '../types/Task.ts';
import FetchStatus from "../enums/FetchStatus.ts";
import Constants from "../enums/Constants.ts";

interface TaskState {
    tasks: Task[];
    status: FetchStatus;
    error: string | null;
}

const initialState: TaskState = {
    tasks: [],
    status: FetchStatus.IDLE,
    error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get(`${Constants.API_URL}/tasks`);
    return response.data;
});

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = FetchStatus.LOADING;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = FetchStatus.SUCCEEDED;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = FetchStatus.FAILED;
                state.error = action.error.message || null;
            });
    },
});

export default tasksSlice.reducer;
