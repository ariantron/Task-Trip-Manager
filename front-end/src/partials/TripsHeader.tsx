import React from 'react';
import {useTranslation} from "react-i18next";

const TripsHeader: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="w-full p-3 border-b-2 border-black">
            <span className="text-2xl font-bold">
                {t('trips')}
            </span>
            <button
                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-black mb-2 ml-5">
                {t('new-trip')}
            </button>
        </div>
    );
};

export default TripsHeader;
