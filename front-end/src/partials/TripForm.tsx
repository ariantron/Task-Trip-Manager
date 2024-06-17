import React, {useEffect, useState} from 'react';
import OffCanvas from '../components/Offcanvas';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../redux/AppStore.ts";
import {fetchDrivers} from "../redux/DriverStore.ts";
import {fetchTrucks} from "../redux/TruckStore.ts";
import axios from 'axios';
import {fetchTasks} from "../redux/TaskStore.ts";
import {fetchTrips} from "../redux/TripStore.ts";

interface TripFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const TripForm: React.FC<TripFormProps> = ({isOpen, onClose}) => {
    const dispatch = useDispatch<AppDispatch>();
    const trucks = useSelector((state) => state.trucks.trucks);
    const drivers = useSelector((state) => state.drivers.drivers);

    const [tripName, setTripName] = useState('');
    const [selectedDriver, setSelectedDriver] = useState('');
    const [selectedTruck, setSelectedTruck] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(fetchDrivers());
        dispatch(fetchTrucks());
    }, [dispatch]);

    const handleCreateTrip = async () => {
        if (tripName && selectedDriver && selectedTruck) {
            const formData = new FormData();
            formData.append('name', tripName);
            formData.append('driver_id', selectedDriver);
            formData.append('truck_id', selectedTruck);

            try {
                const response = await axios.post('http://localhost:8000/trips', formData, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.status === 201) {
                    dispatch(fetchTasks());
                    dispatch(fetchTrips());
                    setSuccessMessage('Trip created successfully!');
                } else {
                    alert('Failed to create trip. Please try again.');
                }
            } catch (error) {
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <OffCanvas isOpen={isOpen} onClose={onClose}>
            <div className="mt-5">
                <h2 className="mb-5 font-bold text-xl">New Trip</h2>
                {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="appearance-none border border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Trip Name"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driver">
                        Driver
                    </label>
                    <div className="inline-block relative w-full">
                        <select id="driver"
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline"
                                value={selectedDriver}
                                onChange={(e) => setSelectedDriver(e.target.value)}
                        >
                            <option value="">Select a Driver</option>
                            {drivers.map(driver => (
                                <option key={driver.id} value={driver.id}>{driver.name}</option>
                            ))}
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="truck">
                        Truck
                    </label>
                    <div className="inline-block relative w-full">
                        <select id="truck"
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline"
                                value={selectedTruck}
                                onChange={(e) => setSelectedTruck(e.target.value)}
                        >
                            <option value="">Select a Truck</option>
                            {trucks.map(truck => (
                                <option key={truck.id} value={truck.id}>{truck.model}, {truck.licensePlate}</option>
                            ))}
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleCreateTrip}
                        type="button">
                        Submit
                    </button>
                </div>
            </div>
        </OffCanvas>
    );
};

export default TripForm;
