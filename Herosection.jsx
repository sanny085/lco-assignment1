import React, { useContext, useState } from 'react';

import StateContext from './Context';
import AppTheme from './Color';

const Herosection = () => {
    const [themeMode, setThemeMode] = useContext(StateContext);

    const theme = useContext(StateContext)[0] ;
    const currTheme = AppTheme[theme]; 

    const [change, setChange] = useState({currTheme});
    
   console.log(`${change.currTheme.backgroundColor}`+" this 89");
   
    return(
        <div style={{ padding: "1rem",
                      backgroundColor: `${currTheme.backgroundColor}`,
                      color: `${currTheme.textColor}`,
                      textAlign: "center",
                      border:`${currTheme.border}`
                      }} >
            <h1>Context API Theme Toggler</h1>
            <p>This is dummy text to check dark mode</p>

            <button onClick={ () => {setThemeMode(themeMode === "light" ? "dark" : "light")} } style={{backgroundColor:"green",
                            padding:"10px 150px",
                            fontSize: "20px",
                            color: "#fff"
            }}>
            Click Me</button>
        </div>
    )
}
export default Herosection;
