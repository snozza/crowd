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
          src="http://placehold.it/1024x700/9DACCB/ffffff/&text=CrowdLobby"
          alt="carousel1"
        />
        <img
          className="carousel-img"
          src="http://placehold.it/1024x700/ffffff/004d66/&text=Promote%20Your%20Bill"
          alt="carousel2"
        />
        <img
          className="carousel-img"
          src="http://placehold.it/1024x700/fffff2/000000/&text=Track%20Progress"
          alt="carousel3"
        />
      </Carousel>
    );
  }
}
