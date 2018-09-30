const data = require('./data')

const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);

app.get('/json', urlLogger, timeLogger, (request, response) => {
  response.status(200).json(data)
});

app.get('/sunsets', (request, response) => {
  response.sendFile('/sunsets.html');
});


const middlewareFuncName = (request, response, text) => {
  next();
}

app.use(function(request, response) {
    response.status(404).end('This page does not exist');
});


app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});