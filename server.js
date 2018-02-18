const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');

const router = require('express-promise-router')();

container.resolve(function(users) {
    const configureExpress = function(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    };

    const setupExpress = function() {
        const app = express();
        const server = http.createServer(app); // AAAAAAAAAAAAAA
        
        server.listen(3000, function() {
            console.log('Listening on port 3000')
        });
        
        
        configureExpress(app);
        
        users.setRouting(router);
        app.use(router);
    };
    
    const app = setupExpress();    
});