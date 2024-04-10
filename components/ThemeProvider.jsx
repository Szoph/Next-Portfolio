'use client'
import {createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext); 
};

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme');
        return theme === 'dark';
        }
        return false;
    });


    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}