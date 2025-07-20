import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import pkg from '../package.json';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const version = useState(
    pkg.version
  );
  const versionstate = useState(
    pkg.versionstate
  );
  
  useEffect(()=>{
    document.title = `${title} | Mizura Platform`;
  }, [title]);

  return (
    <AppContext.Provider value={{navigate, setTitle, version, versionstate}}>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
