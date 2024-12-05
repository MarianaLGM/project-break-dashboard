/*
OK- Tendremos un input dónde meteremos la longitud de la contraseña y un botón para que nos de el resultado.
OK- Tendrá entre 12 caracteres como mínimo y 50 de máximo. Se podrá elegir el número de caracteres    
OK- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
PTE - Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
       - Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       - Minúsculas: "abcdefghijklmnopqrstuvwxyz"
       - Números: "0123456789"
       - Símbolos "!@#$%^&*()-_=+"
OK - `Math.random()` Para generar aleatoriedad
OK - Usa bucles
PTE- Condicionales*/


  

//Crear variable con cada uno de los datos posibles para crear contraseña
//const valorLongitud= parseInt(longitudContraseña.value);
let valores=("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+");
console.log("los valores son: ",valores)


let longitudContraseña=document.getElementById("longitud-Contraseña");//input donde se especifíca el número de caracteres que tiene que contener la contraseña
let generarContraseña=document.getElementById ("generar-contraseña");//boton generar contraseña
let mostrarContraseña=document.getElementById ("mostrar-contraseña");//campo donde se va a mostrar la contraseña generanda



//FUNCION ASIGNAR LONGITUD CONTRASEÑA
longitud=12;
longitudContraseña="";
function actualizarValorLongitud (){
    
    longitudContraseña.addEventListener("input", ()=>{
      longitud= longitudContraseña.value;
    })
    
    }

    actualizarValorLongitud ()

//FUNCION IMPRIMIR CONTRASEÑA
const pintarContraseña=()=>{
    generarContraseña.addEventListener("click", ()=>{  
    actualizarValorLongitud();
    mostrarContraseña.innerHTML= ("Contraseña generada: "+ contraseña)
     })
 }
 
 pintarContraseña();

//FUNCION GENERAR CONTRASEÑA ALEATORIA
function contraseñaRandom() { //length 
   let resultado="";
   for(let i=0; i <= longitud; i++) //para que se acumulen valores aleatorios 
    resultado +=valores.charAt(Math.floor(Math.random()* valores.length))//charAt obtener caracterres dependiendo la posición. FLOOR me permite redondear el número
    return resultado;
}

const contraseña=contraseñaRandom();//50
//console.log("La contraseña generada es: ",contraseña)


  //MENSAJE ERROR 
  function mensajeError (){
  if(longitudContraseña>=12 || longitudContraseña<=50){
    
    }else{
    const h3=document.createElement("h3")
     return "Debes ingresar un número entre 12 y 50"
     }
     
  }
  
mensajeError();



/*------------------------------BACKGROUNDS----------------------------------*/

const backgrounds=[
  "assets/img/Asturias2.jpg",
  "assets/img/Asturias3.jpg",
  "assets/img/Asturias4.jpg",
  "assets/img/Asturias5.jpg",
  "assets/img/Asturias6.jpg",
  "assets/img/Asturias7.jpg",
  "assets/img/Asturias8.jpg",
  "assets/img/Asturias9.jpg",
  "assets/img/Asturias10.jpg"
];

setInterval (function(){
  const url= backgrounds[Math.floor(Math.random()*backgrounds.length)];
  document.body.style.backgroundImage = 'url('+url+')';
  },9000);

  

  