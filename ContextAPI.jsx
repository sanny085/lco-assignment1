import React, { useState } from 'react';

import StateContext from './Context';
import Provider from './Provider';
 
const Agents = () => {
  return (<AgentOne/>)
}
const AgentOne = () => {
  return (<AgentTwo/>)
}
const AgentTwo = () => {
  return (<AgentFinal/>)
}

const AgentFinal = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <StateContext.Consumer>
     {
       (contxt) =>  (
         <React.Fragment>
          <div className="row justify-content-center">
            <div class="col-md-6 col-lg-4 mb-5">
              <h3 className="text-dark">{contxt.data.name}</h3> 
               <span className="m-3">{visible ? contxt.data.accept : " "}</span><br/>
              <button class="btn btn-outline-primary btn-sm" onClick={ () => {
                                       checkAns {setVisible(true)}
                                       (visible ? contxt.isMissionAccepted : " ")}
                                     } type="submit"> 
                    <h3 className="text-dark">Check Status</h3> 
              </button>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <h3 className="text-dark">{contxt.data1.name}</h3> 
               <span className="m-3">{contxt.data1.accept}</span><br/>
              <button class="btn btn-outline-primary btn-sm" onClick={contxt.isMissionAccepted1} type="submit"> 
                    <h3 className="text-dark">Check Status</h3> 
              </button>
            </div>
          </div>
         </React.Fragment>
        )
     }
    </StateContext.Consumer>
  )
}

function ContextAPI() {
    return (
      <React.Fragment>
        <section class="page-section portfolio" id="portfolio">
           <div class="container">
             
             <Provider>
                <Agents/>
             </Provider>  
            
           </div> 
        </section>
      </React.Fragment>
    )
}
export default ContextAPI;
