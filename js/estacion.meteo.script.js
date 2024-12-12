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



///////////////////////////OPCIÓN 1/////////////////////////////////

/*
//DATOS CURRENT//

const infoActual=document.getElementById("infoActual")

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
      <h3>${data.location.name} / ${data.location.country}</h3>
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

//DATOS FORECAST//
const getInfoPorHoras=(days)=> {
  days.forEach((elements)=>{ 
    const infoPorHoras= document.getElementById("infoPorHoras"); //contenedor grande
    let contenedor4= document.createElement("div"); //contenedor foto y nombre
    contenedor4.innerHTML =` 
    <h3>${elements.forecast.forecastday.hour} </h3> 
    <h3>${elements.forecast.forecastday.hour.temp_c} </h3>
    <h3>${elements.forecast.forecastday.hour.condition.icon[0]} </h3>
    `;
    infoPorHoras.appendChild(contenedor4);s
   })
  };
    
getInfoPorHoras()

*/
/////////////////////////////////////OPCION 2///////////////////////////////////////////////

const infoActual=document.getElementById("infoActual")

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
      <h3>${data.location.name} / ${data.location.country}</h3>
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
      <h3> - Precipitaciones: ${data.current.precip_mm} % </h3>
      <h3> - Humedad: ${data.current.humidity} % </h3>
      <h3> - Viento: ${data.current.wind_kph} Km/h </h3>
       `;

       infoActual.appendChild(contenedor1);
       infoActual.appendChild(contenedor2);
       infoActual.appendChild(contenedor3);
    };

    tiempoHoy();

const hoursDays= data.forecast.forecastday[0].hour;
const getInfoPorHoras=()=> {
  hoursDays.forEach((elements)=>{ 
    const infoPorHoras= document.getElementById("infoPorHoras");
    let contenedor4= document.createElement("div"); //contenedor foto y nombre
    contenedor4.classList.add("contenedor4");
    contenedor4.innerHTML =` 
    <h3>${elements.time}h.</h3> 
    <img src="http:${elements.condition.icon}" alt="${elements.condition.text}">
    <h3>${elements.temp_c}ºC</h3>

    `;
    infoPorHoras.appendChild(contenedor4);
   })
  };
  
  getInfoPorHoras()

  } catch (error) {
    //este catch sería el catch de la promesa async
    console.log("error al obtener los datos", error);
  }
};
getEstacionMeteo(); //llamar a la function
    
