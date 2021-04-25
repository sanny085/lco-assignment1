import React, { useState, useEffect } from 'react'
/*import avataaars from '../src/assets/images/avataaars.svg';*/
 
import Axios from 'axios';

const Header = () => {
    const [details, setDetails] = useState({});

   const fetchDetails = async () => {
        const response = await Axios.get('https://randomuser.me/api/');
        console.log(response);
        const open = response.data;
        const detailsCom = open.results.[0]; 
        setDetails({
            image : detailsCom.picture.large,
            title : detailsCom.name.title,
            fname : detailsCom.name.first,
            lname : detailsCom.name.last,
            city : detailsCom.location.city,
            state : detailsCom.location.state,
            country : detailsCom.location.country,
           });
      /*console.log(open.results.[0] );*/
  }

   useEffect( ()=>{
    fetchDetails();
    },[]);

    return (
     <div>
        {/*-- Masthead--*/}
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={details.image} alt="" />
             <h1 className="masthead-heading text-uppercase mb-0">{details.title+" "+details.fname+" "+details.lname}</h1>
            
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
          
                <p className="masthead-subheading font-weight-light mb-0">{details.city}, {details.state}, ({details.country})</p>
            </div>
        </header>
        {/*-- Masthead End--*/}
     </div>
    )
}
export default Header;

