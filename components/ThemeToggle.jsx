"use client";
import {useEffect, useState} from 'react';
import {useTheme} from "../components/ThemeProvider";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }
   
  return (
    <div
    className="relative w-16 h-8 flex items-center shadow-md dark:bg-gray-900 bg-gray-100 cursor-pointer rounded-full p-1" onClick={toggleDarkMode}>
    
    <div className="text-medium">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
        </div>
  
  <div className="absolute bg-medium dark:bg-gray-200 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
  style={darkMode ? {left: "2px"} : {right: "2px"}}></div>

  <div className="ml-4 text-yellow-300">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.93" y1="4.93" x2="3.52" y2="3.52"/>
          <line x1="19.07" y1="19.07" x2="20.48" y2="20.48"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
          <line x1="6.34" y1="17.66" x2="4.93" y2="19.07"/>
          <line x1="19.07" y1="4.93" x2="17.66" y2="6.34"/>
        </svg>
      </div>
    </div>
  )
}

export default ThemeToggle