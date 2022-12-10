import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({darkMode: 'false', toggle: ()=>{}});

export const DarkModeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'false');
    const toggle = () => {
        setDarkMode(darkMode === 'false'? 'true' : 'false')
    }
    useEffect(()=>{
        localStorage.setItem('darkMode', darkMode.toString());
    },[darkMode]);
    return (
        <DarkModeContext.Provider value={{darkMode, toggle}}>
        { children}
        </DarkModeContext.Provider>
    )
}