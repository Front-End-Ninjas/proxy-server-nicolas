const express = require('express');
const path = require('path');

const app = express();

const httpProxy = require('http-proxy');

app.use(express.static(path.join(__dirname, 'public')));

const proxy = httpProxy.createProxyServer();

// const serverGallery = 'http://imagegallery-env.us-west-1.elasticbeanstalk.com';
// const serverDescription = 'http://nileproductdescription-env.zkb3gk9nqy.us-west-1.elasticbeanstalk.com';
// const serverSimilar = 'http://fec-nile-similaritems.us-west-1.elasticbeanstalk.com';
// const serverReview = 'http://nilecustomerreviews-env.znsae38bc5.us-west-1.elasticbeanstalk.com';

const serverGallery = 'http://localhost:3003/';
const serverDescription = 'http://localhost:3001/';
const serverSimilar = 'http://localhost:3000/';
const serverReview = 'http://localhost:3002/';

app.get('/item/*/images', (req, res) => {
  proxy.web(req, res, { target: serverGallery });
});

app.get('/item/*/description', (req, res) => {
  proxy.web(req, res, { target: serverDescription });
});

app.get('/item/*/similar', (req, res) => {
  proxy.web(req, res, { target: serverSimilar });
});

app.get('/item/*/reviews', (req, res) => {
  proxy.web(req, res, { target: serverReview });
});

module.exports = app;
