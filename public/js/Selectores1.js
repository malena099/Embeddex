var marcasSelect = document.getElementById('marcas');
var modelsSelect = document.getElementById('models');
var bateriaSelect = document.getElementById('bateria');
var fechaSelect = document.getElementById('fecha');
var imagen = document.getElementById('imagen');
const url = "/Selecciona";


fetch(url)
    .then(response => response.json())
    .then(data => {
        loadCars(data);})

function loadCars(data) {
    marcas = new Set()
    for (var i=0; i<19; i++) {
        marcas.add("Elige coche");
        marcas.add(data.prueba[i].Marca);
    };
    loadSelect("marcas", marcas);
    marcasSelect.addEventListener("change", loadSelect2);
    marcasSelect.addEventListener("change", loadSelect3);
    modelsSelect.addEventListener("change", loadSelect3);
    bateriaSelect.addEventListener("change", loadSelect4);
    marcasSelect.addEventListener("change", loadSelect4);
    modelsSelect.addEventListener("change", loadSelect4);
    marcasSelect.addEventListener("change", ocultarImagen);
    modelsSelect.addEventListener("change", ocultarImagen);
    bateriaSelect.addEventListener("change", ocultarImagen);
    bateriaSelect.addEventListener("change", loadSelectOculto);
    fechaSelect.addEventListener("change",mostrarImagen);

 //colocamos los datos en un archivo json con su formato
function getModelosForMarca(marcas) {
    
    let models = new Set()
    
    for (var i=0; i<19; i++) {
        models.add("Elige Modelo");
        if (data.prueba[i].Marca === marcas) {
            models.add(data.prueba[i].Modelo);
        }
    }
    
    return models;
}

function getbateriaForMarca(marcas,models) {
    
    let bateria = new Set()
    
    for (var i=0; i<19; i++) {
        bateria.add("Elige la batería");
        if (data.prueba[i].Marca === marcas && data.prueba[i].Modelo == models) {
            bateria.add(data.prueba[i].Bateria);
        }
    }
    
    return bateria;
}

function getFechaForMarcaAndModelo(marcas, models) {     
    let fecha = new Set()
    for (var i=0; i<19; i++) {
            fecha.add("Elige el periodo de producción");
        if (data.prueba[i].Marca === marcas && data.prueba[i].Modelo === models) {
            fecha.add(data.prueba[i].Inicio +'-'+ data.prueba[i].Final);
        }
    }   
    return fecha;
}

function getUrlImagenForMarcaAndModeloAndFecha(marcas, models, bateria) {
    
    let imagenes = []
    
    for (var i=0; i<19; i++) {
        if (data.prueba[i].Marca === marcas && data.prueba[i].Modelo === models && data.prueba[i].Bateria === bateria) {
            imagenes.push(data.prueba[i].Imagen);
        }
    }
    return imagenes;
}

function getUrlCeldaForMarcaAndModeloAndFecha(marcas, models, bateria) {
    
    let celdas = new Set()
    
    for (var i=0; i<19; i++) {
        if (data.prueba[i].Marca === marcas && data.prueba[i].Modelo === models && data.prueba[i].Bateria === bateria) {
            celdas.add(data.prueba[i].Celda);
        }
    }
    return celdas;
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
        $('#bateria').removeAttr('disabled');
    });
        loadSelect('models', getModelosForMarca(marcasSelect.value));
    }
}

function loadSelect3() {
    if(bateriaSelect.value !== "Elige un coche"){
        $('#bateria').change(function(){
        $('#fecha').removeAttr('disabled');
    });
        loadSelect('bateria', getbateriaForMarca(marcasSelect.value, modelsSelect.value));
}
}
function loadSelect4() {
    loadSelect('fecha', getFechaForMarcaAndModelo(marcasSelect.value, modelsSelect.value));
}
function loadSelectOculto() {
    loadSelect('celdacoche', getUrlCeldaForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value, bateriaSelect.value));
}
function mostrarImagen() {
    if(fechaSelect.value !== "Elige el periodo de producción"){
        if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
        imagen.src = getUrlImagenForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,bateriaSelect.value);
            $(document).ready(function(){
                $("#botonConfirmacion").fadeIn(1000);
        });
       }}
       else{
        ocultarImagen();
       }
       CelCoche= getUrlCeldaForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,bateriaSelect.value);
}
function ocultarImagen(){
    imagen.src = getUrlImagenForMarcaAndModeloAndFecha("Elige un coche", "Elige el modelo", "Elige la batería");
    document.getElementById("botonConfirmacion").style.display="none";
   }

};