import React from 'react';
import { Link } from 'react-router';
import './BillCard.css';

export default (props) => {
  const box = (
    <div className="bill-card">
      <div className="bill-name">
        {props.name}
      </div>
      <div className="bill-sponsor">
        <strong>Sponsor:</strong> {props.sponsor}
      </div>
      <div className="bill-summary">
        {props.summary}
      </div>
    </div>
  );
  return props.url ? <Link to={props.url}>{box}</Link> : box;
};
