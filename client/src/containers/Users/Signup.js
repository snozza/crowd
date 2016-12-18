import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Signup extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Helmet title="Signup" />
        Signup Page Placeholder
        {/* put children here */}
      </div>
    );
  }
}

