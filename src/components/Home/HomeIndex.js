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
              src="http://placehold.it/1024x700/ffffff/c0392b/&text=slide1"
              alt="carousel" 
            />
            <img 
              className="carousel-img" 
              src="http://placehold.it/1024x700/ffffff/c0392b/&text=slide2"
              alt="carousel" 
            />
          </Carousel>
      </div>
      </div>
    );
  }
}
