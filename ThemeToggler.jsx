import React, {useContext} from 'react';

import StateContext from './Context';

const ThemeToggler = () => {
   const [themeMode, setThemeMode] = useContext(StateContext);

    return (
        <div onClick={ () => {setThemeMode(themeMode === "light" ? "dark" : "light")} }>
            <span>{themeMode === "light" ? "Turn Off" : "Light On"}</span>
        </div>
    );
};

export default ThemeToggler;
