import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HomeCarousel from './HomeCarousel';

export default class HomeIndex extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="1container">
        <Helmet title="Home" />
        <div className="carousel-container">
          <HomeCarousel />
        </div>
      </div>
    );
  }
}
