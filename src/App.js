/* import logo from './logo.svg'; */
import './App.css';
import { useState } from 'react';
import Navbar from './core/nav/Navbar';
import Header from './core/section/Header';
import About from './core/section/About';


import Lang from "./Lang.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from "./enums/Language.ts";
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';
import Skills from './core/section/Skills.js';
import WorkExperience from './core/section/WorkExperience';
import PersonnalExperience from './core/section/PersonnalExperience';
import Education from './core/section/Education';
import Contact from './core/section/Contact';
import Footer from './core/section/Footer';

let defaultLanguage = Language.FR;
 
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
 
    keySeparator: ".",  // to support nested translations
 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

function App() {

  const [lang, setLang] = useState('EN');

  
  function changeLanguage(language){
    setLang(language);
    i18n.changeLanguage(language)
  }

  return (
    <div className="App">
      <Navbar />
      <Lang onLanguageChange = {changeLanguage} language = {lang} />
      <div className="page-content">
        <div>
          <Header />
          <About />
          <Skills />
          <WorkExperience />
          <PersonnalExperience />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
    </div>
  );
}

export default App;
