import React, {useEffect} from 'react';
import TaskList from "./TaskList.tsx";
import TasksHeader from "./TasksHeader.tsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../redux/TaskStore.ts";
import {AppDispatch} from "../redux/AppStore.ts";

const Tasks: React.FC = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="w-full border-2 border-black md:w-1/2 p-4">
            <TasksHeader/>
            <TaskList tasks={tasks} section="tasks"/>
        </div>
    );
};

export default Tasks;
