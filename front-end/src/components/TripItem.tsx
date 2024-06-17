import React from "react";
import Trip from "../types/Trip.ts";
import TaskList from "../partials/TaskList.tsx";

interface TripItemProps {
    trip: Trip | null;
}

const TripItem: React.FC<TripItemProps> = ({ trip }) => {
    return (
        <div className="mt-5">
            {trip && (
                <>
                    <div className="mb-3">
                        <span className="font-bold pr-2">Driver:</span>
                        <span>{trip?.driver?.name}</span>
                    </div>
                    <div className="mb-3">
                        <span className="font-bold pr-2">Truck Model:</span>
                        <span>{trip?.truck?.model}</span>
                    </div>
                    <div className="mb-3">
                        <span className="font-bold pr-2">Truck License Plate:</span>
                        <span>{trip?.truck?.licensePlate}</span>
                    </div>
                    {trip.tasks.length > 0 && (
                        <>
                            <hr className="mt-5 mb-5" />
                            <div className="mb-3">
                                <div className="font-bold mt-4 mb-4">Tasks:</div>
                                <TaskList tasks={trip.tasks} section="trips" />
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default TripItem;
