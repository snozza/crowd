import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import './App.css';

export const menuItems = [
  { url: `/bills`, title: 'Bills', key: 'bills' },
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to={'/'} activeStyle={{ color: '#33e0ff' }}>
                <div className="" />
                <span>CrowdLobby</span>
              </IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

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
				</Navbar.Collapse>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
