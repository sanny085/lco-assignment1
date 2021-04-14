import React from 'react';
import stateProvider from './context';
import Provider from './provider';


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
