/*## Listado de links:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- Tendremos 2 inputs. Uno de ellos será el título que aparecerá en cada uno de nuestros elementos. Al pulsar el botón de `añadir link` 
se añadirá en el DOM pero también en nuestro `localStorage` para poder recuperarlo siempre.
- Cada uno de los elementos tendrá el nombre que hemos añadido y el enlace al pulsar sobre él (ya sea el texto o el bloque completo). 
También tendrá un botón de eliminar si ya no vamos a hacer uso de él.
- Será un listado de links que funcionará de la misma manera tanto en la página independiente como en el dashboard.
- Dale estilo con CSS

### ¿Qué usaremos?
- `CreateElement`, `appedChild`, ... o directamente un template con `innerHTML`.
- `LocalStorage` para generar persistencia y guardar esos datos.

### PISTAS Y CONSEJOS
- Guarda el dato en el `localStorage` a la vez que se crea en el `DOM`
- Cuando se carga la página el dato del `LocalStorage` deberá aparecer de inicio
*/

const tituloLink= document.getElementById ("tituloLink");//donde pongo el nombre del link
const urlLink= document.getElementById ("urlLink"); //donde meto URL link
const botonAñadir= document.getElementById ("botonAñadir");//botón añadir link

//en LINK tengo guardado cada uno de los links y en LISTALINKS tengo guardados los títulos de los links

//AÑADIR LINK
const añadirLink= ()=>{
    botonAñadir.addEventListener("click", ()=>{

      const listaLinks=document.createElement("li")
      listaLinks.classList.add ("listaLinks")
      listaLinks.innerHTML=tituloLink.value;
      const link=(urlLink.value) //meto el valor de urlLink en una variable para luego llamarla a la hora de querer abrir la URL
//ACCEDER URL LINK
    function abrirlUrl() {
      listaLinks.addEventListener("click", ()=>{
      window.open(link);///cambiar urlLink por una variable que recoja el campo url y que cambie constantemente
    }
    )}
    abrirlUrl()
//CREAMOS BOTÓN ELIMINAR LINK
    const btnEliminarLink=document.createElement("button")
    btnEliminarLink.classList.add ("btnEliminarLink")
    btnEliminarLink.innerHTML="X"
    lista.appendChild(listaLinks);  
    lista.appendChild(btnEliminarLink);
    btnEliminarLink.addEventListener("click", ()=>{
        listaLinks.remove();//eliminar link
        btnEliminarLink.parentNode.removeChild(btnEliminarLink);//para eliminar la X a la vez que elimino el link       
    })
    })

}

añadirLink();





//LOCAL STORAGE
//guardar datos Local Storage ***localStorage.setItem("titulo", "Curso de Angular avanzado - Víctor Robles");***
//guardar objetos Local Storage ***localStorage.setItem("usuario", JSON.stringify(mi_objeto));***
//borrar link Local Storage ***localStorage.removeItem("titulo");***
/*



localStorage.setItem('Ejemplo','imagendeejemplo.png')*/

/*------------------------------BACKGROUNDS----------------------------------*/

const backgroundsLinks=[
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
    const url= backgroundsLinks[Math.floor(Math.random()*backgroundsLinks.length)];
    document.body.style.backgroundImage = 'url('+url+')';
    },9000);



