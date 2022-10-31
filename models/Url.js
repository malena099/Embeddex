var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CocheSchema = new Schema({
    marcas : String,
    modelos : String,
    periodo : String,
    imagenes: String,
    tecnologia: String,
    celdas: String,
    Tension_Nominal: String,
    Tension_Min: String,
    Tension_Max: String,
    Carga_Nominal: String,
    Corriente_Carga: String,
    Temperatura: String
});

module.exports = mongoose.model('Coche', CocheSchema);