import React from 'react';
import ReactDOM from 'react-dom';
import Bills from './Bills';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bills />, div);
});
