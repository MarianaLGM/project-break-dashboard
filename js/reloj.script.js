/*

## RELOJ DIGITAL 24h + Fecha:

-OK Por un lado tendremos un reloj digital con horas, minutos y segundos (mostrara el paso de los seg)
-OK Formatear las hora. Si las horas, min y seg son menores de 10 habrá que añadir un 0 delante para que quede como 01, 02, ...
-OK La fecha tendrá formato DD/MM/AAAA 
- Condicionales para las frases según franja horaria
*/


//FUNCION RELOJ DIGITAL
function actualizarReloj() {
    const now= new Date() // `new Date()` Es el objeto que representa la fecha y hora. 
    let horas= now.getHours() //getHours viene por defecto,no se puede poner otro nombre
    let minutos= now.getMinutes() //ídem
    let segundos= now.getSeconds()//ídem 
      
    //formatear hora
    horas=horas <10 ? "0" + horas:horas
    minutos=minutos <10 ? "0" + minutos:minutos
    segundos=segundos <10 ? "0" + segundos:segundos

    const horaActual=document.getElementById ("reloj")
    horaActual.textContent=`
      ${horas}:${minutos}:${segundos}
    `;   
  
}


setInterval(actualizarReloj,1000); //los segundos deben cambiar automaticamente en pantalla

actualizarReloj();//llamo a la function


//FUNCION DÍA-MES-AÑO ACTUAL (FECHA)
function obtenerFecha (){
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1; 
    
    const diaActual=document.getElementById ("dia-mes-año")
      diaActual.textContent=`
      ${hoy}/${mesActual}/${añoActual}
    `;
}
obtenerFecha();
setInterval(obtenerFecha,1000); //ver si cambia automáticamente mañana la fecha




//Cambiar formato hora para luego usar condicional y mostrar frases según franja horaria (toLocaleString)

//convirtiendo el formato hh:mm:ss en hh:mm y en string para poder comparar con las "franjas horarias"
let formatoHoraMinutos = new Date();
let nuevoFormatoHora = formatoHoraMinutos.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      
});
console.log(nuevoFormatoHora)


//funcion para mostrar frases según franja horaria:
function mostrarMensaje (){

    if (nuevoFormatoHora>="00:01" && nuevoFormatoHora<="07:00"){ 
        texto= "¡Es hora de descansar, mañana no rindes!"

    }else if (nuevoFormatoHora>="07:01" &&  nuevoFormatoHora<="12:00"){
        texto= "¡Buenos días, desayuna fuerte y a darle al código!"

    }else if (nuevoFormatoHora>="12:01" && nuevoFormatoHora<="14:00"){
        texto= "¡Echa un rato más pero no olvides comer!"

    }else if (nuevoFormatoHora>="14:01" && nuevoFormatoHora<="16:00"){
        texto= "¡Espero que hayas comido!"

    }else if (nuevoFormatoHora>="16:01" && nuevoFormatoHora<= "18:00"){
        texto= "¡Buenas tardes, el último empujón!"
        
    }else if (nuevoFormatoHora>="18:01" && nuevoFormatoHora<= "22:00"){
        texto= "¡Esto ya son horas extras, ... piensa en parar pronto!"

    }else{
        texto= "¡Buenas noches, es hora de pensar en parar y descansar!"
    }    

    const frases=document.getElementById ("frases")
    frases.innerHTML=`
      ${texto}
    `;  

}

mostrarMensaje()


/*------------------------------BACKGROUNDS----------------------------------*/

const backgroundsReloj=[
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
    const url= backgroundsReloj[Math.floor(Math.random()*backgroundsReloj.length)];
    document.body.style.backgroundImage = 'url('+url+')';
    },9000);
  