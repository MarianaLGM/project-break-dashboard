/*## Estación meteorológica:

- El tiempo en el momento en el que accedemos a la página con varios elementos:
        - Ciudad y Pais.ASTURIAS-ESPAÑA
        - El estado del clima.
        - Imagen y grados celsius de nuestra ciudad.
        - Precipitaciones, humedad y viento km/h.
        - La previsión por horas en el día en el que estamos. Con su hora, imagen y grados celsius. 

-OK API del tiempo de `https://www.weatherapi.com/`
-OK Necesitarás una API KEY. Podrás conseguirla entrando en la url de weatherapi y pulsando en signup. Rellena los datos que pide 
y nada más entrar os aparecerá esa 
-OK Puedes probar que funciona en esta página: `https://www.weatherapi.com/api-explorer.aspx` metiendo la APIKEY 
y dándole al botón de `show response`

- Este es el `base URL` al que tendréis que acceder `http://api.weatherapi.com/v1` añadiremos detrás lo que necesitemos. 
 - Este es un ejemplo de endpoint con la APIKEY y la ciudad. Solo habría que cambiar los datos de `${apiKey}` por la nuestra 
 y `${ciudad}` por la elegida por nosotros ("https://api.weatherapi.com/v1/forecast.json?key=a464065dd0fc4a379b095151240212&q=Oviedo&aqi=no");
- `fetch` para hacer peticiones a la API.
*/

//La URL base es `http` cámbiala desde el inicio por `https` 
//documentación completa `https://www.weatherapi.com/docs/`
//API KEY. a464065dd0fc4a379b095151240212--------API ("https://api.weatherapi.com/v1/forecast.json?key=a464065dd0fc4a379b095151240212&q=Oviedo&aqi=no");
//Usa `promesas` o `ASYNC/AWAIT`. Piensa si necesitas solo un endpoint o varios. 

const appDiv=document.getElementById("app")
/*
//PETICIÓN FETCH
const getEstacionMeteo= async()=>{
  try{ //este try es como el then de la promesa del async
    const response=await fetch ("http://api.weatherapi.com/v1/current.json?key=a464065dd0fc4a379b095151240212&q=Oviedo");                       
  if(!response.ok){
     throw new Error ("ha surgido un error", response.status)
   }
  const data= await response.json();//segundo then de la promesa
  console.log("El valor de data es: ", data)
  console.log("el valor de response es:" ,response)
  
  }catch (error){//este catch sería el catch de la promesa async
    console.log ("error al obtener los datos", error);
  }; 

}

getEstacionMeteo();//llamar a la function
console.log (getEstacionMeteo)


current= function (object) {

  const nuevoContenedorJs =document.createElement("div") //creo un nuevo contenedor donde voy a meter todos esos datos api 
  nuevoContenedorJs.classList.add ("nuevoDiv")
  nuevoContenedorJs.innerHTML=`
  <h3>${object.condition.text}</h3>
  <img id="tiempoOviedo"  alt="Oviedo" src="${object.condition.icon}"/>
  <h3>${object.temp_c}</h3>
  <h3>${object.precip_mm} ${object.humidity} ${object.wind_kph}</h3>
   `;
 appDiv.appendChild(nuevoContenedorJs);
}

current()*/


  /*
  function estacionMeteorologica (){
    const appDiv=document.getElementById ("app");
    appDiv.innerHTML=""
    fetch("https://api.weatherapi.com/v1/current.json?key=a464065dd0fc4a379b095151240212&q=Oviedo")
      .then((response)=>response.json()) //respuesta del servidor 
      .then((data)=>{
        console.log(data)
        console.log("El valor de data current" ,data.current)
        
      
          const nuevoContenedorJs =document.createElement("div") 
          nuevoContenedorJs.classList.add ("nuevoDiv")

          nuevoContenedorJs.innerHTML= `  
          <h3>${current.condition.text}</h3>
          <img id="tiempoOviedo"  alt="Oviedo" src="${data.current.elements.condition.icon}"/>
          <h3>${temp_c}</h3>
          <h3>${precip_mm} ${elements.humidity} ${elements.wind_kph}</h3>
         `; 
         appDiv.appendChild(nuevoContenedorJs);
        });
      
      }
    
      estacionMeteorologica()
*/

/*
    <h2>${element.location.name} ${element.location.country}</h2>
    <h3>${element.curret.condition.text}</h3>
    <img id="tiempoOviedo"  alt="Oviedo" src="${element.current.condition.icon}"/>
    <h3>${element.current.temp_c}</h3>
    <h3>${element.current.precip_mm} ${element.current.humidity} ${element.current.wind_kph}</h3>*/
    

/*      - Ciudad y Pais.ASTURIAS-ESPAÑA (location.name) y (location.country)
        - El estado del clima.(current.condition.text)
        - Imagen y grados celsius de nuestra ciudad. (current.temp_c) (current.condition.icon)
        - Precipitaciones, humedad y viento km/h. (current.precip_mm) (current.humidity) (current.wind_kph)


        - La previsión por horas en el día en el que estamos. 
                  -Con su hora, imagen y grados celsius. (location.localtime)*/

    
/*------------------------------BACKGROUNDS----------------------------------*/

const backgroundsMeteo=[
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
  const url= backgroundsMeteo[Math.floor(Math.random()*backgroundsMeteo.length)];
  document.body.style.backgroundImage = 'url('+url+')';
  },9000);



  // clima 7 dias: JSON: http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7