import React, {useState} from 'react';
import OffCanvas from '../components/Offcanvas.tsx';

interface TaskViewProps {
    title: string;
    description: string;
}

const TaskView: React.FC<TaskViewProps> = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <OffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2 className="text-2xl font-bold mb-2 mt-2">
                {title}
            </h2>
            <p>
                {description}
            </p>
        </OffCanvas>
    );
};

export default TaskView;
