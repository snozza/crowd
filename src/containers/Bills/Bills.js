import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Bills extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Helmet title="Bills" />
        {children}
      </div>
    );
  }
}
