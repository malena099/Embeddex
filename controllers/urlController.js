var Coche = require('../models/Url');
/* var fs = require('fs');
var path = require('path');
 */
var controller = {

home: async function(req,res){
    res.render('index');
},

getCoches: async function(req, res){
    const coche = await Coche.find();
    res.json({coche});
}

};

module.exports = controller;

/* saveProject: function(req, res){

    var Coches = new coche();

    var params = req.body;
    Coches.name= params.marcas;
    Coches.description = params.modelos;
    Coches.category = params.periodo;
    Coches.year = null;
    Coches.langs = params.tecnologia;
    Coches.image=params.celdas;
    Coches.Tension_Nominal=params.Tension_Nominal;
    Coches.Tension_Min= params.Tension_Min;
    Coches.Tension_Max=params.Tension_Max;
    Coches.Carga_Nominal=params.Carga_Nominal;
    Coches.Corriente_Carga=params.Corriente_Carga;
    Coches.Temperatura=params.Temperatura;
    Coches.Modulo=null;

    Coches.save((err, projectStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar el documento.'});

            if(!projectStored) return res.status(404).send({message: ' No se ha podido guardar el proyecto'});

            return res.status(200).send({Coches: projectStored});
    });
},
 */