const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/restaurants',
    proxy({
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/restaurants': '/'
      },
      changeOrigin: false,
    })
  );

  app.use(
    '/restaurant-details',
    proxy({
      target: 'http://localhost:3002',
      pathRewrite: {
        '^/restaurant-details': '/'
      },
      changeOrigin: false,
    })
  );
};