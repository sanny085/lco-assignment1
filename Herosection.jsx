import React, {useContext} from 'react';

import StateContext from './Context';
import AppTheme from './Color';

function Herosection() {
    const theme = useContext(StateContext) [0];
    const currTheme = AppTheme[theme]; 
    return (
        <div>
            <h1>Context API Theme Toggler</h1>
            <p>This is dummy text to check dark mode</p>

            <button style={{backgroundColor:"#226ae60",
                            padding:"10px 150px",
                            fontSize: "20px",
                            color: "#fff",
                            border:`${currTheme.border}`
            }}>
            Click Me</button>
        </div>
    )
}
export default Herosection;
