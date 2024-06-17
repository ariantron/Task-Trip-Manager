import React from 'react';
import TripsHeader from "./TripsHeader.tsx";
import TripsScrollMenu from "./TripsScrollMenu.tsx";
import TripItem from "../components/TripItem.tsx";
import { useSelector } from "react-redux";

const Trips: React.FC = () => {
    const trips = useSelector((state) => state.trips.trips);
    const selectedTrip = useSelector((state) => state.trips.selectedTrip) ?? (trips.length > 0 ? trips[0] : null);

    return (
        <div className="w-full border-2 border-black md:w-1/2 p-4">
            <TripsHeader/>
            <TripsScrollMenu/>
            <TripItem trip={selectedTrip}/>
        </div>
    );
};

export default Trips;
