import Task from "./Task.ts";

export default interface Trip {
    id: string;
    name: string;
    driver: {
        name: string;
    };
    truck: {
        model: string;
        licensePlate: string;
    };
    tasks : Task[]
}

export type SelectedTrip = Trip | null;