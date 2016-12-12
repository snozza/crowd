import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
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
								<div className="app brand" />
								<span>CrowdLobby</span>
							</IndexLink>
						</Navbar.Brand>
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
					</Navbar.Collapse>
        </Navbar>

        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
