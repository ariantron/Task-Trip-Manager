import React from 'react';
import TripsHeader from "./TripsHeader.tsx";
// import TripsScrollMenu from "./TripsScrollMenu.tsx";

const Trips: React.FC = () => {
    return (
        <div className="w-full border-2 border-black md:w-1/2 p-4">
            <TripsHeader/>
            {/*<TripsScrollMenu/>*/}
        </div>
    );
};

export default Trips;
