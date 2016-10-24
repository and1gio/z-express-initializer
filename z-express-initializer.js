'use strict';

module.exports = {
    run: function (app, next) {
        var express = require('express');
        var cookieParser = require('cookie-parser');
        var bodyParser = require('body-parser');

        app.express = express();
        app.express.set('port', app.config.zApp.port);

        app.express.use(bodyParser.json());
        app.express.use(bodyParser.urlencoded({extended: false}));
        app.express.use(cookieParser());


        if(app.config.zApp.viewEngine){
            app.express.set('views', app.folderPath.app.root + app.config.zApp.viewEngine.dir);
            app.express.set('view engine', app.config.zApp.viewEngine.type);
        }

        if(app.config.zApp.staticFolder){
            app.express.use(express.static(app.folderPath.app.root + app.config.zApp.staticFolder));
        }

        next();
    }
};