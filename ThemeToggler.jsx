import React, { useState, useContext } from 'react';

import DarkModeToggle from "react-dark-mode-toggle";

import StateContext from './Context';
const ThemeToggler = () => { 
   const [themeMode, setThemeMode] = useContext(StateContext);

   const [isDarkMode, setIsDarkMode] = useState(() => false);
   return (

        <div className="text-center" onClick={ () => {setThemeMode(themeMode === "light" ? "dark" : "light")} }>
            <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={85} speed={10} />
            
            <span>{themeMode === "light" ? "Light off" : "Light on"}</span>
       
           {
               console.log(" Toggle : "+themeMode)
           }
               <br/><br/>
        </div>
        
    );
};
export default ThemeToggler;


