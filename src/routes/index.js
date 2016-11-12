import Core from '../modules/Core';

function errorLoading(err) {
  throw new Error('Dynamic page loading failed: ' + err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

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
      path: 'help',
      getComponent(location, cb) {
        System.import('../modules/Help')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
