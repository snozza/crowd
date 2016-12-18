import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './About.css';

export default class About extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet title="About" />
        <img
          className="img-responsive about-img-stretched"
          src="http://placehold.it/1024x600/f5f5dc/000000/&text=We%20are%20here%20to%20bring%20influcence%20back%20to%20the%20people"
          alt="about"
        />
      </div>
    );
  }
}
