
const express = require('express');
const CandidateController = require('./CandidateController.js');
const routes = new express.Router();

routes.post('/register', CandidateController.register);

routes.get('/', (req, resp) => {
    resp.send('Servidor online');
})


module.exports = routes;
