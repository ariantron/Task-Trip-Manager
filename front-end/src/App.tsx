import './App.css';
import Header from "./partials/Header.tsx";
import Tasks from "./partials/Tasks.tsx";
import Trips from "./partials/Trips.tsx";

function App() {
    return (
        <div className="container mx-auto">
            <Header/>
            <div className="container mx-auto flex flex-wrap">
                <Trips/>
                <Tasks/>
            </div>
        </div>
    );
}

export default App;
