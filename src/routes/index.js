/**
 * This file handles all routing and async loading of
 * split JavaScript files. The splitting of components
 * is based off the routes created in this file.
 */

import Core from '../modules/Core';

// throws an error in the console of the page wasn't able to load
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

/**
 * This object we are exporting is the equivalent of:
 * <Route path="/" component={Core}>
 *   <IndexRoute component={Home}/>
 *   <Route path="about" component={About}/>
 *   <Route path="blog" component={Blog}/>
 *   <Route path="users" component={Users}>
 *   <Route path="*" component={Home}/>
 * </Route>
 */
export default {
  path: '/',
  component: Core,
  indexRoute: {
    getComponent(location, cb) {
      System.import('../modules/Home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('../modules/About')
          .then(loadRoute(cb, false))
          .catch(errorLoading);
      },
    },
    {
      path: 'blog',
      getComponent(location, cb) {
        System.import('../modules/Blog')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'users',
      getComponent(location, cb) {
        System.import('../modules/Users')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('../modules/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
