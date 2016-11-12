import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes/';

const Root = () => <Router history={browserHistory} routes={routes} />;

export default Root;
