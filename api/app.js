'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importando rotas
const rotasIndex = require('./rota/index');
const rotasUsuario = require('./rota/usuario');

// Carregar rotas
app.use(rotasIndex);
app.use(rotasUsuario);

// Exportações
module.exports = app;