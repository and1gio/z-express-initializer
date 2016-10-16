'use strict';

module.exports = {
    run: function (app, next) {
        var express = require('express');
        var cookieParser = require('cookie-parser');
        var bodyParser = require('body-parser');

        app.express = express();
        app.express.set('port', app.config.express.port);

        app.express.use(bodyParser.json());
        app.express.use(bodyParser.urlencoded({extended: false}));
        app.express.use(cookieParser());

        next();
    }
};