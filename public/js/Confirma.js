//En las siguientes lineas cargamos la base de datos de las celdas

var CeldaSelect = document.getElementById('celdacoche');
var cell = document.getElementById('cell');

const url2 = "/Celdas";

fetch(url2)
    .then(response => response.json())
    .then(data => {
        loadCell(data);})

function loadCell(data) {

    celda = new Set()

    for (var i=0; i<3; i++) {
        celda.add(data.celda[i].modelo);
    };
    // ponemos en un nuevo conjunto la imagen de la celda seleccionada
    function getCelda(celda) {
    
        let imgcel = []
        
        for (var i=0; i<3; i++) {
            if (celda === data.celda[i].modelo) {
                imgcel.push(data.celda[i].imagen);
                console.log(imgcel);
            }
        }
        return imgcel;
    }
    
   //Las siguientes lineas son para aceptar o rechazar la celda elegida 
    
    const btn=document.querySelector("#btn1");
    const btn2=document.querySelector("#btn2");
    const btn3=document.querySelector("#btn3");
    
    btn.addEventListener("click", ConfirmDemo);
    btn2.addEventListener("click", Negacionbutton);
    btn3.addEventListener("click", Negacionbutton);


    function ConfirmDemo() {

        //Ingresamos un mensaje a mostrar

        alert("Has confirmado su elección");

        // Con el siguiente código enseñamos los datos de la celda
        
        document.getElementById("botonConfirmacion").style.display="none";
        document.getElementById("selectores").style.display="none";
        document.getElementById("botonConfirmacion2").style.display="block";
        document.getElementById("Contenedor1").style.width=300;
        cell.src = getCelda(CeldaSelect.value);
        document.getElementById("imagen").style.width="20%";
        document.getElementById("infoCelda2").style.display="block";
        document.getElementById("imagen").style.top="10%";
};
    
    function Negacionbutton(){
        alert("Vuelva a introducir el modelo.");
        location.reload()
    };


};

