const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

module.exports = () => {
    router.get('/', urlController.home);
    router.get('/Selecciona', urlController.getCoches);
    router.get('/Celdas', urlController.getCeldas);
    return router;
};