const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');''
const ejs = require('ejs');
const http = require('http');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const validator = require('express-validator');
const passport = require('passport');
// const morgan = require('morgan');

const container = require('./container');
const router = require('express-promise-router')();

container.resolve(function(users) {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://nodesocket:nodesocket@ds041678.mlab.com:41678/nodesocket');

    const configureExpress = function(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        // app.use(morgan('dev'));

        app.use(validator());
        app.use(session({
            secret: 'Matheus.Galdino',
            resave: true,
            saveInitialized: true,
            saveUninitialized: false,
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
            })
        }));
        app.use(flash());

        app.use(passport.initialize());
        app.use(passport.session());
    };

    const setupExpress = function() {
        const app = express();
        const server = http.createServer(app);
        
        server.listen(3000, function() {
            console.log('Listening on port 3000')
        });
        
        
        configureExpress(app);
        
        users.setRouting(router);
        app.use(router);
    };
    
    const app = setupExpress();    
});