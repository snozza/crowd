import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Login extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Helmet title="Login" />
        Login Page Placeholder
        {/* put children here */}
      </div>
    );
  }
}
