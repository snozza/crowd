import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from './containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path={'/'} component={App}>
      <IndexRoute component={App} />
    </Route>
  );
};
