"use strict";

const express = require ('express');
const app = express();

const { quotes } = require('./quotes');

app.get('/*', (req, res) => {
    res.status(200).send(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.listen(3000, () => console.log('Random famous quotes should be working on port: 3000'));