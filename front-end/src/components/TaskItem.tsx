import React from 'react';
import {useTranslation} from "react-i18next";
import Task from "../types/Task.ts";

interface TaskItemProps {
    task: Task;
    section: string | null;
    onViewClick: () => void;
    onActionClick: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, section, onViewClick, onActionClick}) => {
    const {t} = useTranslation();
    const actionText = section === 'tasks' ? t('assign-to-selected-trip') :
        section === 'trips' ? t('unassign-from-selected-trip') : null;

    return (
        <li className="list-item p-4 flex items-center border border-black m-1 rounded">
            <h3 className="text-lg font-medium mr-4">{task?.title}</h3>
            <p className="text-lg font-medium text-gray-600">{task?.trip?.name}</p>
            <div className="flex ml-auto">
                <button
                    className="p-1 bg-transparent text-black border border-black rounded hover:bg-black hover:border-transparent hover:text-white mr-1 mt-2 mb-2"
                    onClick={onViewClick}
                >
                    {t('view')}
                </button>
                {actionText && <button
                    className="p-1 bg-transparent text-black border border-black rounded hover:bg-black hover:border-transparent hover:text-white mr-1 mt-2 mb-2"
                    onClick={() => onActionClick(task)}>
                    {actionText}
                </button>}
            </div>
        </li>
    );
};

export default TaskItem;
