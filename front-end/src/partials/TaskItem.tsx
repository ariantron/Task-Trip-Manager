import React from 'react';
import {useTranslation} from "react-i18next";

interface TaskItemProps {
    title: string;
    trip: string;
    onViewClick: () => void;
    onAssignClick: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({title, trip, onViewClick, onAssignClick}) => {
    const {t} = useTranslation();

    return (
        <li className="list-item p-4 flex items-center">
            <h3 className="text-lg font-medium mr-4">{title}</h3>
            <p className="text-lg font-medium text-gray-600">{trip}</p>
            <div className="flex ml-auto">
                <button
                    className="p-1 bg-transparent text-black border border-black rounded hover:bg-black hover:border-transparent hover:text-white mr-1 mt-2 mb-2"
                    onClick={onViewClick}
                >
                    {t('view')}
                </button>
                <button
                    className="p-1 bg-transparent text-black border border-black rounded hover:bg-black hover:border-transparent hover:text-white mr-1 mt-2 mb-2"
                    onClick={onAssignClick}
                >
                    {t('assign-to-selected-trip')}
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
