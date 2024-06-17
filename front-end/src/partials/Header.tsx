import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TripForm from './TripForm';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isTripFormOpen, setIsTripFormOpen] = useState(false);

    const handleFormClick = () => {
        setIsTripFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsTripFormOpen(false);
    };

    return (
        <>
            <nav className="bg-white flex justify-between items-center p-4 border-2 border-black">
                <h1 className="text-2xl md:text-3xl font-bold">{t('app-name')}</h1>
                <button
                    onClick={handleFormClick}
                    className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800 mb-2 mr-5">
                    {t('new-trip')}
                </button>
            </nav>
            <TripForm isOpen={isTripFormOpen} onClose={handleCloseForm} />
        </>
    );
};

export default Header;
