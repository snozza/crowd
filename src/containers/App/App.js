import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Helmet from 'react-helmet';
import './App.css';

export const menuItems = [
  { url: `/bills`, title: 'Bills', key: 'bills' },
  { url: `/about`, title: 'About', key: 'about' },
];

class App extends Component {
  render() {
    return (
			<div className="app">
				<Navbar fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<IndexLink to={'/'} activeStyle={{ color: '#33e0ff' }}>
								<div className="brand" />
								<span className="brand-text">CrowdLobby</span>
							</IndexLink>
						</Navbar.Brand>
            <Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav navbar>
							{menuItems.map((menuItem) => {
								return (
									<LinkContainer key={menuItem.key} to={menuItem.url}>
										<NavItem>
											{menuItem.title}
                    </NavItem>
                  </LinkContainer>
                  );
              })}
            </Nav>
            <Nav pullRight>
              <LinkContainer to={'/login'}>
                <NavItem>
                  Log in
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/signup'}>
                <NavItem>
                  Sign up
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
