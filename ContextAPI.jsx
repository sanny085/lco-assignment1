import React from 'react';
import stateProvider from './context';
import Provider from './provider';

const Agents = () =>{
  return(<AgentOne/>);
}
const AgentOne = () =>{
  return(<AgentTwo/>);
}
const AgentTwo = () =>{
  return(<AgentThree/>);
}
const AgentThree = () =>{
  return(<AgentBond/>);
}
const AgentBond = () =>{
  return(<stateProvider>

<stateProvider/>
);
}


function ContextAPI() {
    return (
        <React.Fragment>
          <section class="page-section portfolio" id="portfolio">
            <div class="container">
               <Provider>
                   <Agents/>
               <Provider>
  
            </div> 
          </section>
        </React.Fragment>
    )
}

export default ContextAPI;
