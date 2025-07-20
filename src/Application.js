import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import pkg from '../package.json';
import en from './localization/en.json';
import ru from './localization/ru.json';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  
  // Состояние для языка и переводов
  const [language, setLanguage] = useState('ru');
  const [labels, setLabels] = useState(ru);
  
  const api_url = pkg.public_api;
  const version = pkg.version;
  const versionstate = pkg.versionstate;
  const author = pkg.author;
  const kaurcevdev = pkg.kaurcevdev;
  const github = pkg.github; 

  // Загрузка переводов при изменении языка
  useEffect(() => {
    setLabels(language === 'ru' ? ru : en);
  }, [language]);

  useEffect(() => {
    document.title = `${title} | ${labels.project_name}`;
  }, [title, labels]);

  return (
    <AppContext.Provider value={{
      navigate, 
      setTitle, 
      version, 
      versionstate, 
      author, 
      kaurcevdev, 
      github, 
      api_url,
      language,
      setLanguage,
      labels
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);