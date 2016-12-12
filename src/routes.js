import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Bills, About, Login, Signup, NotFound } from './containers';

export default () => {
  return (
    <Route path={'/'} component={App}>
			<IndexRoute component={App} />
			<Route path={'/bills'} component={Bills}>
				<IndexRoute component={Bills} />
			</Route>
			<Route path={'/about'} component={About}>
				<IndexRoute component={About} />
			</Route>
			<Route path={'/login'} component={Login}>
				<IndexRoute component={Login} />
			</Route>
			<Route path={'/signup'} component={Signup}>
				<IndexRoute component={Signup} />
			</Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
