const express = require('express');
const next = require('next');

const devProxy = {
  '/api': {
    target: 'http://localhost:5000/api/',
    changeOrigin: true,
    pathRewrite: { '^/api': '/' },
  },
};

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({ dir: './client', dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev) {
      const proxy = require('http-proxy-middleware');
      Object.entries(devProxy).forEach(([context, options]) => {
        server.use(proxy(context, options));
      });
    }

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, error => {
      if (error) throw error;
      console.info(`Running on port ${port} [${env}]`);
    });
  })
  .catch(error => {
    console.error('An error occured:\n');
    console.error(error.message);
  });
