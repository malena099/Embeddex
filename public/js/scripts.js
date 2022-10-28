var marcasSelect = document.getElementById('marcas');
var modelsSelect = document.getElementById('models');
var fechaSelect = document.getElementById('fecha');

   
const url = "/Selecciona";


fetch(url)
    .then(response => response.json())
    .then(data => {
        loadCars(data);})

function loadCars(data) {
    marcas = new Set()
    
    for (var i=0; i<48; i++) {
        marcas.add("Elige coche");
        marcas.add(data.coche[i].marcas);
    };
    console.log(marcas);
    loadSelect("marcas", marcas);
    marcasSelect.addEventListener("change", loadSelect2);
    marcasSelect.addEventListener("change", loadSelect3);
    modelsSelect.addEventListener("change", loadSelect3);

//colocamos los datos en un archivo json con su formato
function getModelosForMarca(marcas) {
    
    let models = new Set()
    
    for (var i=0; i<48; i++) {
        models.add("Elige Modelo");
        if (data.coche[i].marcas === marcas) {
            models.add(data.coche[i].modelos);
        }
    }
    
    return models;
}
function getFechasForMarcaAndModelo(marcas, models) {

    let fechas = new Set()
            
    for (var i=0; i<48; i++) {
        fechas.add("Elige Fecha");
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models) {
            fechas.add(data.coche[i].periodo);
        }
    }
    
    return fechas;
}
function loadSelect(id, values) {
    let selectElement = document.getElementById(id);
    selectElement.innerHTML = ''
    for (let value of values) {
        selectElement.add(new Option(value));  
      };
    $('#marcas').change(function(){
        $('#models').removeAttr('disabled');
      });
    }

function loadSelect2() {
    if(marcasSelect.value !== "Elige un coche"){
        $('#models').change(function(){
        $('#fecha').removeAttr('disabled');
    });
        loadSelect('models', getModelosForMarca(marcasSelect.value));
    }
}

function loadSelect3() {
        loadSelect('fecha', getFechasForMarcaAndModelo(marcasSelect.value, modelsSelect.value));
        console.log(getFechasForMarcaAndModelo(marcasSelect.value, modelsSelect.value));
}
};