import React, {useState}  from 'react'

import StateContext from './Context';
import HThemeToggler from './HThemeToggler';
import Herosection from './Herosection';

const DarkLight = ()=> {
    const themeHook = useState("dark");
 
    return (
        <div>
            {/*Dark & light Mode*/}
            <StateContext.Provider value={themeHook}>  
               <HThemeToggler/>
               <Herosection/>
             </StateContext.Provider>
            {/*End Dark & light Mode*/}
        </div>
    )
}
export default DarkLight;

