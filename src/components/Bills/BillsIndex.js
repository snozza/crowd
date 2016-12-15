import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import BillCard from './BillCard';

export default class BillsIndex extends Component {

  render() {
    return (
      <div className="container">
        <div className="help-block" />
        <Helmet title="Bills" />
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
          return <Col xs={12} sm={12} md={4} lg={3}>
            <BillCard
              sponsor={'Sen. Andrewson, Andrew [D-OR]'} 
              name={'Veterans Health Care Staffing Improvement Act'}
              summary={'This bill directs the Department of Veterans Affairs (VA) to carry out a Docs-to-Doctors Program to recruit individuals separating from the Armed Forces who served in a health care capacity in the Armed Forces.'}
              raised={'$72,203'}
            />
          </Col>
          })}
        </Row>
      </div>
    );
  }
}
