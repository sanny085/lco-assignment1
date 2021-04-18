import React, {useContext} from 'react';

import StateContext from './Context';

const ThemeToggler = () => {
   const [themeMode, setThemeMode] = useContext(StateContext);
   console.log(themeMode+"User set 1");
    return (
        <div>
            <button onClick={ () => {setThemeMode(themeMode === "light" ? "dark" : "light")} }><span>{themeMode === "light" ? "Turn Off" : "Light On"}</span></button>
        </div>
    );
};

export default ThemeToggler;
