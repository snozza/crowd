import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import BillCard from './BillCard';

export default class BillsIndex extends Component {

  render() {
    return (
      <div className="container">
        <Helmet title="Bills" />
        <Row>
          <Col xs={12} sm={12} md={4} lg={3}>
            <BillCard
              sponsor={'Sen. Andrewson, Andrew [D-OR]'} 
              name={'Veterans Health Care Staffing Improvement Act'}
              summary={'This bill directs the Department of Veterans Affairs (VA) to carry out a Docs-to-Doctors Program to recruit individuals separating from the Armed Forces who served in a health care capacity in the Armed Forces.'}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
