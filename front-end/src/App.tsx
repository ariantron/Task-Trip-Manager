import './App.css'
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next"

function App() {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('app.name')}</title>
            </Helmet>
            <div className="container mx-auto">
                <nav className="bg-white flex justify-between items-center p-4 mt-2 border-b-2 border-b-black">
                    <h1 className="text-2xl font-bold">
                        {t('app.name')}
                    </h1>
                    <button className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-700">
                        {t('new')}
                    </button>
                </nav>
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
