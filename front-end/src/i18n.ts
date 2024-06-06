import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./locales/en.json";

const resources = {
    en: {
        translation: en
    }
};

const defaultLanguage = 'en'
const supportedLanguages = Object.keys(resources)

const currentLanguage = () => {
    const localstorageLang = localStorage.getItem("lng")
    if (localstorageLang !== null
        && supportedLanguages.includes(localstorageLang)) {
        return localstorageLang
    } else {
        return defaultLanguage
    }
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: currentLanguage(),
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;