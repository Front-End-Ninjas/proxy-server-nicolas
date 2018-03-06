const express = require('express');
const path = require('path');

const app = express();
const httpProxy = require('http-proxy');

app.use(express.static(path.join(__dirname, 'public')));

const apiProxy = httpProxy.createProxyServer();

const serverGallery = 'http://localhost:3003';
const serverDescription = 'http://localhost:3001';
const serverSimilar = 'http://localhost:3000';
const serverReview = 'http://localhost:3002';

app.all('/item/9/images', (req, res) => {
  apiProxy.web(req, res, { target: serverGallery });
});

app.all('/item/9/description', (req, res) => {
  apiProxy.web(req, res, { target: serverDescription });
});

app.all('/item/9/similar', (req, res) => {
  apiProxy.web(req, res, { target: serverSimilar });
});

app.all('/item/9/reviews', (req, res) => {
  apiProxy.web(req, res, { target: serverReview });
});

app.listen(3004, () => console.log('Listening on port 3004!'));
