export default interface Task {
    id: string;
    title: string;
    description: string,
    trip: null | {
        id: string
        name: string
    }
}