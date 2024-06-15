import React from 'react';
import {useTranslation} from "react-i18next";

const Header: React.FC = () => {
    const {t} = useTranslation();

    return (
        <nav className="bg-white flex justify-between items-center p-4 mt-2 border-b-2 border-b-black">
            <h1 className="text-3xl font-bold">{t('app-name')}</h1>
        </nav>
    );
};

export default Header;
