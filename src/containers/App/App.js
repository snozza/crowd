import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import Root from '../root';
import config from '../../../config';
import './App.css';

export const menuItems = [
  { url: `${config.urlInfix}/templates`, title: 'Templates', key: 'templates' },
  { url: `${config.urlInfix}/emails`, title: 'Emails', key: 'emails' },
  { url: `${config.urlInfix}/snippets`, title: 'Snippets', key: 'snippets' },
  { url: `${config.urlInfix}/substitutions`, title: 'Lists', key: 'lists' },
  { url: `${config.urlInfix}/analytics`, title: 'Analytics', key: 'analytics' },
  { url: `${config.urlInfix}/campaigns`, title: 'Campaigns', key: 'campaigns' },
  { url: `${config.urlInfix}/images`, title: 'Images', key: 'images' },
  { url: `${config.urlInfix}/users`, title: 'Users', key: 'users', admin: true },
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>


            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
