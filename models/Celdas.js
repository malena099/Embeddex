var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CeldasSchema = new Schema({
    fabricante: String,
    modelo : String,
    Capacidad_Nominal: String,
    Capacidad_minima: String,
    Voltaje_max: String,
    Voltaje_min: String,
    Temperatura_min: String,
    Temperatura_max: String,
    Temperatura_ensayo: String,
    Corriente_carga: String,
    Tension_carga: String,
    Corriente_corte: String,
    Tiempo_Carga_Descarga: String,
    Corriente_Descarga: String,
    Tension_Corte: String,
    Medida_Carga_Descarga: String,
    Corriente_maxima_de_descarga_sostenida: String,
    Pico_de_Corriente: String,
    Tiempo_Pico: String,
    Corriente_Carga_Maxima: String,
    imagen: String
});

module.exports = mongoose.model('Celda', CeldasSchema);