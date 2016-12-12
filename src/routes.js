import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Bills, NotFound } from './containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path={'/'} component={App}>
			<IndexRoute component={App} />
			<Route path={'/bills'} component={Bills}>
				<IndexRoute component={Bills} />
			</Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
