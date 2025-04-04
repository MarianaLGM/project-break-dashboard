/*imagenes random:

### ¿Como funciona?
Todas las páginas de tu proyecto tendrán una imagen random de background. Cambiará cada 15 segundos (o el tiempo que decidas).

### ¿Qué usaremos? 
- `Math.random()` para generar aleatoriedad
- En esta página `https://unsplash.com/es` podrás sacar imagenes de calidad de manera gratuíta. Puedes elegir otras páginas sin problema.
 O directamente desde goolge. Usa 10 minagenes mínimo para darle más dinamismo
- Estilos en línea que añadiremos con JS. 
  - Este puede ser un ejemplo: `document.body.style.backgroundImage = "url('mi-imagen.jpg')"`;
- `setInterval` para darle ese tiempo de cambio

### PISTAS Y CONSEJOS
Puedes generar de inicio una imagen de fondo por CSS o directamente hacer que la función se invoque y luego cada 15 segundos, 
o el tiempo que decidas.*/


const backgroundsGeneral=[
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
  const url=  backgroundsGeneral[Math.floor(Math.random()* backgroundsGeneral.length)];
  document.body.style.backgroundImage = 'url('+url+')';
  },9000);


//const audio = new Audio("audio.mp3");

//audio.play();