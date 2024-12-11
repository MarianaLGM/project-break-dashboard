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
 y `${ciudad}` por la elegida por nosotros ("https://api.weatherapi.com/v1/forecast.json?key=a464065dd0fc4a379b095151240212&q=Oviedo&&days=1");
- `fetch` para hacer peticiones a la API.
*/

//La URL base es `http` cámbiala desde el inicio por `https` 
//documentación completa `https://www.weatherapi.com/docs/`
//API KEY. a464065dd0fc4a379b095151240212--------API ("https://api.weatherapi.com/v1/forecast.json?key=a464065dd0fc4a379b095151240212&q=Oviedo&aqi=no");
//Usa `promesas` o `ASYNC/AWAIT`. Piensa si necesitas solo un endpoint o varios. 


const infoActual=document.getElementById("infoActual")

//PETICIÓN FETCH
const getEstacionMeteo = async () => {
  try {
    //este try es como el then de la promesa del async
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=a464065dd0fc4a379b095151240212&q=Oviedo&days=1&lang=es"
    ); 

    if (!response.ok) {
      throw new Error("ha surgido un error", response.status);
    }

    const data = await response.json(); //segundo then de la promesa
    console.log("El valor de data es: ", data);
    console.log("el valor de response es:", response);

    const tiempoHoy = () => {
      console.log("data", data);
      //contenedor 1
      const contenedor1 = document.createElement("div"); //creo un nuevo contenedor donde voy a meter todos esos datos api
      contenedor1.classList.add("contenedor1");
      contenedor1.innerHTML = `
      <h3>${data.location.name.toUpperCase()} / ${data.location.country}</h3>
      <h3>${data.current.condition.text}</h3>
      <img id="tiempoOviedo"  alt="Oviedo" src="${data.current.condition.icon}"/>
       `;

       //contenedor 2
      const contenedor2 = document.createElement("div"); //creo un nuevo contenedor donde voy a meter todos esos datos api
      contenedor2.classList.add("contenedor2");
      contenedor2.innerHTML = `      
      <h3>${data.current.temp_c}ºC</h3>
      `;
      //contenedor 3
      const contenedor3 = document.createElement("div"); //creo un nuevo contenedor donde voy a meter todos esos datos api
      contenedor3.classList.add("contenedor3");
      contenedor3.innerHTML = `      
      <h3> Precipitaciones: ${data.current.precip_mm} % </h3>
      <h3> Humedad: ${data.current.humidity} % </h3>
      <h3> Viento: ${data.current.wind_kph} Km/h </h3>
       `;

       infoActual.appendChild(contenedor1);
       infoActual.appendChild(contenedor2);
       infoActual.appendChild(contenedor3);

    };

    tiempoHoy();
  } catch (error) {
    //este catch sería el catch de la promesa async
    console.log("error al obtener los datos", error);
  }

};

getEstacionMeteo(); //llamar a la function

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


/////////////////////////////////////////////////////////////////////////////////////////////////

const infoPorHoras=document.getElementById("infoPorHoras")

//PETICIÓN FETCH
const getInfoPorHoras = async () => {
  try {
    //este try es como el then de la promesa del async
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=a464065dd0fc4a379b095151240212&q=Oviedo&days=1&lang=es"
    ); 

    if (!response.ok) {
      throw new Error("ha surgido un error", response.status);
    }

    const datos = await response.json(); //segundo then de la promesa
    console.log("El valor de datos es: ", datos);
    console.log("el valor de response es:", response);

    const tiempoPorHoras = ()=> {
      console.log("datos", datos);
//contenedor 4

    const contenedor4 = document.createElement("li"); //creo un nuevo contenedor donde voy a meter todos esos datos api
    contenedor4.classList.add("contenedor4");
    contenedor4.innerHTML = ` 
      <h3>${datos.forecast.forecastday.hour}</h3> 
      <h3>${datos.forecast.forecastday.hour.temp_c} </h3>
      <h3>${datos.forecast.forecastday.hour.condition.icon[0]} </h3>
    `;
    infoPorHoras.appendChild(contenedor4);
    };

    tiempoPorHoras();
    } catch (error) {
    //este catch sería el catch de la promesa async
    console.log("error al obtener los datos", error);
  }

};

  getInfoPorHoras (); //llamar a la function

