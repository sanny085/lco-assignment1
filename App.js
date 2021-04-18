import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';

import ContextAPI from './ContextAPI';
import DarkLight from './DarkLight';

import PortfolioSection from './PortfolioSection';
import About from './About';
import ContactMe from './ContactMe';
import Footer from './Footer';

function App() {
  return (
  <div className="App">
       <NavBar/>
          <Header/>
          
          <ContextAPI/>
          <DarkLight/>
          
          <PortfolioSection/>
          <About/>
          <ContactMe/>
       <Footer/>
   </div>
  );
};

export default App;
