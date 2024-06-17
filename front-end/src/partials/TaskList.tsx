import React, {useState} from 'react';
import TaskItem from "../components/TaskItem";
import TaskView from "./TaskView";
import Task from "../types/Task.ts";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import FetchStatus from "../enums/FetchStatus.ts";
import axios from "axios";
import Constants from "../enums/Constants.ts";
import {fetchTasks} from "../redux/TaskStore.ts";
import {AppDispatch, RootState} from "../redux/AppStore.ts";
import {fetchTrips} from "../redux/TripStore.ts";

interface TaskListProps {
    tasks: Task[],
    section: string | null
}

const TaskList: React.FC<TaskListProps> = ({tasks, section}) => {
    const {t} = useTranslation();
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const tasksIsLoading = useSelector((state: RootState) => state.tasks.status === FetchStatus.LOADING);
    const tripsIsLoading = useSelector((state: RootState) => state.trips.status === FetchStatus.LOADING);
    const dispatch = useDispatch<AppDispatch>();
    const trips = useSelector((state: RootState) => state.trips.trips);
    const selectedTrip = useSelector((state: RootState) => state.trips.selectedTrip);

    const handleViewClick = (task: Task) => {
        setSelectedTask(task);
    };

    const handleClose = () => {
        setSelectedTask(null);
    };

    if ((section === 'tasks' && tasksIsLoading) ||
        (section === 'trips' && tripsIsLoading)) {
        return <div>{t('loading...')}</div>;
    }

    const handleActionClick = (task: Task) => {
        const formData = new FormData();
        formData.append('task_id', task?.id);
        formData.append('trip_id', selectedTrip?.id ?? trips[0]?.id ?? null);
        let action = '';
        if (section === 'tasks') {
            action = 'assign';
        } else if (section === 'trips') {
            action = 'unassign';
        }
        axios.post(`${Constants.API_URL}/tasks/${action}`, formData, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(() => {
                dispatch(fetchTasks());
                dispatch(fetchTrips());
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <ul className="list mt-2">
                {tasks.map((task: Task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        section={section}
                        onViewClick={() => handleViewClick(task)}
                        onActionClick={(task: Task) => handleActionClick(task)}
                    />
                ))}
            </ul>
            {selectedTask && (
                <TaskView
                    task={selectedTask}
                    isOpen={Boolean(selectedTask)}
                    onClose={handleClose}
                />
            )}
        </>
    );
};

export default TaskList;
