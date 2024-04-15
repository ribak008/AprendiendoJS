let nombreV="";
let apellidoV="";
let edadV=0;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let botonsub = document.getElementById("botonsub");

botonsub.addEventListener("click",(e)=> {
    
    e.preventDefault();

    nombreV= nombre.value;
    apellidoV=apellido.value;
    edadV=edad.value;

    if(nombreV===""){
        alert("Ingrese nombre");
        return;
    }
    if(apellidoV===""){
        alert("Ingrese apellido");
        return;
    }
    if(edadV===""){
        alert("Ingrese edad");
        return;
    }

    

    console.log(`Nombre: ${nombreV} Apellido: ${apellidoV} Edad: ${edadV}`)
});