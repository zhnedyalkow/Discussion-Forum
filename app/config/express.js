/* globals __dirname */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const flash = require('connect-flash');

const init = (app) => {
    // defensive programming
    if (typeof app.use !== 'function' ||
        typeof app.set !== 'function') {
        throw new Error('Invalid app');
    }

    // decorator
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    // decorator
    app.use('/static', express.static(path.join(__dirname, '../../public')));

    // decorator
    app.use(morgan('combined'));

    // decorator
    app.use(flash());

    // view engine
    app.set('view engine', 'pug');
};

module.exports = {
  init,
};