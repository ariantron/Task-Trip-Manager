import React from 'react';

interface OffCanvasProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={onClose}></div>
            <div
                className={`fixed inset-y-0 right-0 bg-white shadow-lg p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ width: '75%', maxWidth: '500px' }}
            >
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
