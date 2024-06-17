import React from 'react';
import OffCanvas from '../components/Offcanvas.tsx';
import Task from "../types/Task.ts";

interface TaskViewProps {
    task: Task
    isOpen: boolean;
    onClose: () => void;
}

const TaskView: React.FC<TaskViewProps> = ({task, isOpen, onClose}) => {
    return (
        <OffCanvas isOpen={isOpen} onClose={onClose}>
            <h2 className="text-2xl font-bold mb-2 mt-2">
                {task.title}
            </h2>
            <p>
                {task.description}
            </p>
        </OffCanvas>
    );
};

export default TaskView;
