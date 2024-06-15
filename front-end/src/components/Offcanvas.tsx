import React from 'react';

interface OffCanvasProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
            <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-white h-full shadow-lg p-4">
                <button
                    onClick={onClose}
                    className="text-black font-medium p-2 hover:text-gray-700 text-2xl">
                    🗙
                </button>
                <hr className="border border-black mt-2 mb-2" />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OffCanvas;
