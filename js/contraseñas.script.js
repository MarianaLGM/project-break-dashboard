/*
OK- Tendremos un input dónde meteremos la longitud de la contraseña y un botón para que nos de el resultado.
OK- Tendrá entre 12 caracteres como mínimo y 50 de máximo. Se podrá elegir el número de caracteres    
OK- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
OK - Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
       - Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       - Minúsculas: "abcdefghijklmnopqrstuvwxyz"
       - Números: "0123456789"
       - Símbolos "!@#$%^&*()-_=+"
OK - `Math.random()` Para generar aleatoriedad
OK - Usa bucles
PTE- Condicionales*/

//CREAR CONTRASEÑA ALEATORIA
const crearContraseña = (valores, length) => {
  
  let contraseña = "";
  for (let x = 0; x < length; x++) {
      let random = Math.floor(Math.random() * valores.length);
      contraseña += valores.charAt(random);
  }
  return contraseña;
};

//GENERAR CONTRASEÑA modificando el length según indica el input
const generar = () => {
  let length = parseInt(longitudInput.value);

  const mayusculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas=  "abcdefghijklmnopqrstuvwxyz";
  const numeros= "0123456789";
  const caracteresEspeciales=  "!@#$%^&*()-_=+";

  const valores=mayusculas+minusculas+numeros+caracteresEspeciales

  resultadoContraseña.innerText = crearContraseña(valores, length);
  const mensajeError = () => {
    if(length>=12 && length<=50){
        resultadoContraseña.innerText=generar()
          }else{
        resultadoContraseña.innerText= "Debes ingresar un número entre 12 y 50"
          }
    }
  mensajeError()
};

const botonGenerar=document.getElementById ("botonGenerar");
  botonGenerar.addEventListener("click", () => {
  generar()
    });



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



