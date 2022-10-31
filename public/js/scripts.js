var marcasSelect = document.getElementById('marcas');
var modelsSelect = document.getElementById('models');
var fechaSelect = document.getElementById('fecha');
var imagen = document.getElementById('imagen');
var cell = document.getElementById('cell');
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
    loadSelect("marcas", marcas);
    marcasSelect.addEventListener("change", loadSelect2);
    marcasSelect.addEventListener("change", loadSelect3);
    modelsSelect.addEventListener("change", loadSelect3);
    marcasSelect.addEventListener("change", ocultarImagen);
    modelsSelect.addEventListener("change", ocultarImagen);
    fechaSelect.addEventListener("change",mostrarImagen);

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

function getUrlImagenForMarcaAndModeloAndFecha(marcas, models, fechas) {
    
    let imagenes = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            imagenes.push(data.coche[i].imagenes);
        }
    }
    return imagenes;
}

function getUrlCeldasForMarcaAndModeloAndFecha(marcas, models, fechas) {
    
    let celdas = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            celdas.push(data.coche[i].celdas);
        }
    }
    return celdas;
}

function getvoltajeForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let voltajenom = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            voltajenom.push(data.coche[i].Tension_Nominal);
        }
    }
    
    return voltajenom;
}

function getMinVolt2ForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let mvolt2 = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            mvolt2.push(data.coche[i].Tension_Min);
        }
    }
    
    return mvolt2;
}

function getMaxVolt2ForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let mxvolt2 = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            mxvolt2.push(data.coche[i].Tension_Max);
        }
    }
    
    return mxvolt2;
}

function getCarga2ForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let cargax2 = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            cargax2.push(data.coche[i].Carga_Nominal);
        }
    }
    
    return cargax2;
}

function getCorrienteCarga2ForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let cargacor2 = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            cargacor2.push(data.coche[i].Corriente_Carga);
        }
    }
    
    return cargacor2;
}

function getTemperatura2ForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let temp2 = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            temp2.push(data.coche[i].Temperatura);
        }
    }
    return temp2;
}


function getTecnologiaForMarcaAndModeloAndFecha(marcas, models, fechas) {
    let t2 = []
    
    for (var i=0; i<48; i++) {
        if (data.coche[i].marcas === marcas && data.coche[i].modelos === models && data.coche[i].periodo === fechas) {
            t2.push(data.coche[i].tecnologia);
        }
    }
    
    return t2;
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

function mostrarImagen() {
    if(fechaSelect.value !== "Elige Fecha"){
        if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
        imagen.src = getUrlImagenForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
            $(document).ready(function(){
                $("#botonConfirmacion").fadeIn(1000);
        });
       }}
       else{
        ocultarImagen();
       }
}
function ocultarImagen(){
    imagen.src = getUrlImagenForMarcaAndModeloAndFecha("Elige un coche", "Elige el modelo", "Elige Fecha");
    document.getElementById("botonConfirmacion").style.display="none";
}


const btn=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");


btn.addEventListener("click", ConfirmDemo);
btn2.addEventListener("click", Negacionbutton);

function ConfirmDemo() {
    //Ingresamos un mensaje a mostrar
    alert("Has confirmado su elección");
    // Con el siguiente código enseñamos los datos de la celda
    document.getElementById("botonConfirmacion").style.display="none";
    document.getElementById("selectores").style.display="none";
    document.getElementById("botonConfirmacion2").style.display="block";
    document.getElementById("Contenedor1").style.width=300;
    cell.src = getUrlCeldasForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
    document.getElementById("imagen").style.width="20%";
    document.getElementById("infoCelda2").style.display="block";
    document.getElementById("imagen").style.top="10%";

    document.getElementById("t2").innerHTML=getTecnologiaForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);

    document.getElementById("v").innerHTML=getvoltajeForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
    
    document.getElementById("mv2").innerHTML=getMinVolt2ForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);

    document.getElementById("mxv2").innerHTML=getMaxVolt2ForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
    
    document.getElementById("Carganom2").innerHTML=getCarga2ForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);   

    document.getElementById("CorCarga2").innerHTML=getCorrienteCarga2ForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
    
    document.getElementById("Temp2").innerHTML=getTemperatura2ForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
};

function Negacionbutton(){
    alert("Vuelva a introducir el modelo.");
    location.reload()
};

};