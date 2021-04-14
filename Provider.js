import React, { useState } from 'react'

import StateContext from './Context';


const Provider = (props) => {
    const[mission, setMission] = useState({
        name : 'Marriage Hall',
        team : '007',
        accept : 'Not Accepted'
    });
    const[mission1, setMission1] = useState({
        name : 'Movie Hall',
        team : '009',
        accept : 'Not Accepted'
    });

    return (
      <React.Fragment>
         <StateContext.Provider value={{
              data: mission,
              isMissionAccepted: () => {
                setMission({...mission, name: "Marriage Hall Booked", accept: "ACCEPTED TEAM"});
              },
              data1:mission1,
              isMissionAccepted1: () =>{
                setMission1({...mission1, name:"Movie Hall changed"})
              }
          }}>
            {props.children}
          </StateContext.Provider>
     </React.Fragment>
    )
}

export default Provider;
