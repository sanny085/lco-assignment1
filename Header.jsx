import React, { useState, useEffect } from 'react'
/*import avataaars from '../src/assets/images/avataaars.svg';*/

import Axios from 'axios';

const Header = () => {
    const [details, setDetails] = useState({});

   const fetchDetails = async () => {
        const response = await Axios.get('https://randomuser.me/api/');
        const open = response.data;
      
        setDetails({
            image : open.results.[0].picture.large,
            title : open.results.[0].name.title,
            fname : open.results.[0].name.first,
            lname : open.results.[0].name.last,
            city : open.results.[0].location.city,
            state : open.results.[0].location.state,
            country : open.results.[0].location.country,
           });
      console.log(open.results.[0] );
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
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
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

