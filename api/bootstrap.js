const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const app  = require('./app');

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
