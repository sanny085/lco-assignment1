import React, { useState, useContext } from 'react';

import DarkModeToggle from "react-dark-mode-toggle";

import StateContext from './Context';
const ThemeToggler = () => { 
   const [themeMode, setThemeMode] = useContext(StateContext);

   const [isDarkMode, setIsDarkMode] = useState(() => false);

   
   return (
      
     <div className="text-center">
      <br/>
        <span onClick={ () => {setThemeMode(themeMode === "light" ? "dark" : "light")} }>
            <DarkModeToggle  className="btnOutline" onChange={setIsDarkMode} checked={isDarkMode} size={85} speed={10} />
               { console.log(" Toggle : "+themeMode) }
        </span>
      <br/> <br/>
     </div>
    );
};
export default ThemeToggler;


