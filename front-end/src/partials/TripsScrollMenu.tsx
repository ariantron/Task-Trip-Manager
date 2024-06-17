import React, { useEffect } from 'react';
import ScrollMenu from '../components/ScrollMenu';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Trip from '../types/Trip.ts';
import FetchStatus from "../enums/FetchStatus.ts";
import {fetchTrips, setSelectedTrip} from "../redux/TripStore.ts";
import {AppDispatch} from "../redux/AppStore.ts";

const TripsScrollMenu: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const trips = useSelector((state) => state.trips.trips);
    const isLoading = useSelector((state) => state.trips.status === FetchStatus.LOADING);

    useEffect(() => {
        dispatch(fetchTrips());
    }, [dispatch]);

    const handleClick = (trip: Trip) => {
        dispatch(setSelectedTrip(trip));
    };

    if (isLoading) {
        return <div>{t('loading...')}</div>;
    }

    const links = trips.map((trip: Trip) => ({
        id: trip.id,
        text: trip.name,
        data: trip,
    }));

    return (
        <ScrollMenu links={links} handleChildClick={handleClick} />
    );
};

export default TripsScrollMenu;
