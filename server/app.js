// Add code here 
const express = require('express');
const { join } = require('path');

const app = express();

app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 3000);

module.exports = app;