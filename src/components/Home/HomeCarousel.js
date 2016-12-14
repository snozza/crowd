import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import decorators from './carouselDecorators';
import './Carousel.css';

export default class HomeCarousel extends Component {
  render() {
    const carouselSettings = {
      heightMode: 'max',
      scrollMode: 'page'
    };
    return(
      <Carousel decorators={decorators} { ...carouselSettings }>
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
    );
  }
}
