import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Helmet title="About" />
        About Us Placeholder
        {/* put children here */}
      </div>
    );
  }
}
