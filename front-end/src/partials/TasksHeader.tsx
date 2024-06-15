import React from 'react';
import {useTranslation} from "react-i18next";

const TasksHeader: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="w-full p-3 border-b-2 border-black">
            <span className="text-2xl font-bold">
                {t('tasks')}
            </span>
        </div>
    );
};

export default TasksHeader;
