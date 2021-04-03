import React from 'react'

import cabin from '../src/assets/images/cabin.png';
import cake from '../src/assets/images/cake.png';
import circus from '../src/assets/images/circus.png';
import game from '../src/assets/images/game.png';
import safe from '../src/assets/images/safe.png';
import submarine from '../src/assets/images/submarine.png';

import Portfolio from './Portfolio';

const PortfolioSection = () => {
    return (
        <div>
      
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
              
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
           
                <div class="row justify-content-center">
                
                    <div class="col-md-6 col-lg-4 mb-5">
                        <Portfolio images={cabin}/>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 mb-5">
                       <Portfolio images={cake}/>
                    </div>
              
                    <div class="col-md-6 col-lg-4 mb-5">
                      <Portfolio images={circus}/>
                    </div>
                  
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                         <Portfolio images={game}/>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <Portfolio images={safe}/>
                    </div>
                   
                    <div class="col-md-6 col-lg-4">
                        <Portfolio images={submarine}/>
                    </div>

                </div>
            </div>
        </section>
   
        </div>
    )
}

export default PortfolioSection
