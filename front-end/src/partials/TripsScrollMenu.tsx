import React, { useEffect, useState } from 'react';
import ScrollMenu from '../components/ScrollMenu';
import axios from 'axios';
import {useTranslation} from "react-i18next";

interface Trip {
    id: string;
    name: string;
}

const TripsScrollMenu: React.FC = () => {
    const {t} = useTranslation();
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get('https://tts-api.mtrade.ir/trips');
                setTrips(response.data);
                setLoading(false);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    if (loading) {
        return <div>{t('loading...')}</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const links = trips.map(trip => ({
        id: trip.id,
        href: `#${trip.id}`,
        text: trip.name
    }));

    return <ScrollMenu links={links} />;
};

export default TripsScrollMenu;
