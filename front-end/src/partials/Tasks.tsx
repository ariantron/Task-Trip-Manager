import React from 'react';
import TaskList from "./TaskList.tsx";
import TasksHeader from "./TasksHeader.tsx";

const Tasks: React.FC = () => {
    return (
        <div className="w-full border-2 border-black md:w-1/2 p-4">
            <TasksHeader/>
            <TaskList/>
        </div>
    );
};

export default Tasks;
