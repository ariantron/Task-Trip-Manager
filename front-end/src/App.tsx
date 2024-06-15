import './App.css';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
    const { t } = useTranslation();
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    const handleViewClick = () => {
        setIsOffCanvasOpen(true);
    };

    const handleCloseClick = () => {
        setIsOffCanvasOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>{t('app.name')}</title>
            </Helmet>
            <div className="container mx-auto">
                <nav className="bg-white flex justify-between items-center p-4 mt-2 border-b-2 border-b-black">
                    <h1 className="text-3xl font-bold">
                        {t('app.name')}
                    </h1>
                </nav>
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full border-2 border-black md:w-1/2 p-4">
                        <div className="w-full p-3 border-b-2 border-black">
                            <span className="text-2xl font-bold">
                                Tasks
                            </span>
                            <button
                                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-black mb-2 ml-5">
                                New Task
                            </button>
                        </div>
                        <ul className="list border-2 border-black rounded mt-2">
                            <li className="list-item p-4 flex items-center">
                                <h3 className="text-lg font-medium mr-4">Item Title</h3>
                                <p className="text-lg font-medium text-gray-600">Trip Details</p>
                                <div className="flex ml-auto">
                                    <button
                                        onClick={handleViewClick}
                                        className="p-1 bg-transparent text-black border border-black rounded hover:bg-black hover:border-transparent hover:text-white mr-1 mt-2 mb-2">
                                        View
                                    </button>
                                    <button
                                        className="p-1 bg-transparent text-black border border-black rounded hover:bg-black hover:border-transparent hover:text-white mr-1 mt-2 mb-2">
                                        Assign to Selected Trip
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full border-2 border-black md:w-1/2 p-4">
                        <div className="w-full p-3 border-b-2 border-black">
                            <span className="text-2xl font-bold">
                                Trips
                            </span>
                            <button
                                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-black mb-2 ml-5">
                                New Trip
                            </button>
                        </div>
                        <div className="scrollmenu overflow-x-auto whitespace-nowrap">
                            <a href="#home"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Home</a>
                            <a href="#news"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">News</a>
                            <a href="#contact"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Contact</a>
                            <a href="#about"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">About</a>
                            <a href="#support"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Support</a>
                            <a href="#blog"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Blog</a>
                            <a href="#tools"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Tools</a>
                            <a href="#base"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Base</a>
                            <a href="#custom"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Custom</a>
                            <a href="#more"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">More</a>
                            <a href="#logo"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Logo</a>
                            <a href="#friends"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Friends</a>
                            <a href="#partners"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Partners</a>
                            <a href="#people"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">People</a>
                            <a href="#work"
                               className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white">Work</a>
                        </div>
                    </div>
                </div>
            </div>

            {isOffCanvasOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-white h-full shadow-lg p-4">
                        <button
                            onClick={handleCloseClick}
                            className="text-black font-medium p-2 hover:text-gray-700 text-2xl">
                            🗙
                        </button>
                        <hr className="border border-black mt-2 mb-2"/>
                        <div>
                            <h2 className="text-2xl font-bold mb-2 mt-2">
                                Task Title
                            </h2>
                            <p>
                                Task Description
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
