var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PruebaSchema = new Schema({
    Marca : String,
    Modelo : String,
    Bateria : String,
    Inicio: String,
    Final: String,
    Celda: String,
    Imagen: String,
});

module.exports = mongoose.model('Prueba', PruebaSchema);