import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

class Root extends Component {

  render() {
    return (
      <Row>
        <Col xs={8}>
          Crowd Lobby
        </Col>
        <Col xs={4}>
          Something else
        </Col>
      </Row>
    );
  }
}

export default connect(s => s)(Root);
