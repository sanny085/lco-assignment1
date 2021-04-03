import React from 'react'

  

const Portfolio = ({images}) => {
    return (
    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
            <i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" src={images} alt="" />
    </div>
    )
}

export default Portfolio;
