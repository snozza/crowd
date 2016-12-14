import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Helmet from 'react-helmet';
import './Carousel.css';

export default class HomeIndex extends Component {

  render() {
    const { children } = this.props;
    const carouselSettings = {
      heightMode: 'max'
    };
    return (
      <div className="container">
        <Helmet title="Home" />
        <div className="carousel-container">
          <Carousel { ...carouselSettings }>
            <img 
              className="carousel-img" 
              src="http://placehold.it/1024x700/ffffff/004d66/&text=CrowdLobby"
              alt="carousel" 
            />
            <img 
              className="carousel-img" 
              src="http://placehold.it/1024x700/ffffff/004d66/&text=Explore"
              alt="carousel" 
            />
          </Carousel>
      </div>
      </div>
    );
  }
}
