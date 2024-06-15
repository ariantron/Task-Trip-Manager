import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TaskItem from "./TaskItem.tsx";

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks: ', error);
            });
    }, []);

    return (
        <ul className="list border-2 border-black rounded mt-2">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    {/*={task.description}*/}
                    onViewClick={}
                    onAssignClick={}
                />
            ))}
        </ul>
    );
};

export default TaskList;
