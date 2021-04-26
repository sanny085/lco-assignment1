import React, { useState, useContext } from 'react';

import StateContext from './Context';
import Provider from './Provider';
import AppTheme from './Color';

const Agents = ({color}) => {
  return (<AgentOne color={color}/>)
};
const AgentOne = ({color}) => {
  return (<AgentTwo color={color}/>)
};
const AgentTwo = ({color}) => {
  return (<AgentFinal color={color}/>)
};


const AgentFinal = ({color}) => {


  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const checkAnswer1 = () => {
      setVisible(true); 
      console.log('Hello 1');
    };
  const checkAnswer2 = () => {
      setVisible1(true); 
      console.log('Hello 2');
    };
   
  return (
    <StateContext.Consumer>
     {
       (contxt) =>  (
         <React.Fragment>
          <div  className="row justify-content-center m-0" >
            <div className="col-md-6 col-lg-4 mb-5">
     
              <h3 className="text"  style={{color:`${color}`}}>{contxt.data.name}</h3> 
               <span className="m-3  ">{visible ? contxt.data.accept : " "}</span><br/>
              <button className="btn btn-outline-primary btn-sm" onClick={() => ( checkAnswer1(), contxt.isMissionAccepted())}  type="submit"> 
                    <h3 className="text"  style={{color:`${color}`}}>Check Status</h3> 
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <h3 className="text"  style={{color:`${color}`}}>{contxt.data1.name}</h3> 
               <span className="m-3">{visible1 ? contxt.data1.accept : " "}</span><br/>
              <button className="btn btn-outline-primary btn-sm" onClick={() => ( checkAnswer2(), contxt.isMissionAccepted1())} type="submit"> 
                    <h3 className="text"  style={{color:`${color}`}}>Check Status</h3> 
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
  
  const theme = useContext(StateContext)[0] ;
  const currTheme = AppTheme[theme]; 
  console.log("contextApI page : "+ currTheme.backgroundColor);

    return (
      <React.Fragment>
        <section className="page-section portfolio p-0" id="portfolio">
           <div className="container-fluid m-0" style={{ padding: "1rem",
                      backgroundColor: `${currTheme.backgroundColor}`,
                      color: `${currTheme.textColor}`,
                      textAlign: "center",
                      border:`${currTheme.border}`
                      }}>
              
             <Provider>
                <Agents color={`${currTheme.textColor}`}/>
             </Provider>  
            
           </div> 
        </section>
      </React.Fragment>
    )
}
export default ContextAPI;
