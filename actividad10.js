// Alumno: Leonardo Daniel Aviña Neri 4PRAM

// https://rickandmortyapi.com/api/character
// https://rickandmortyapi.com/documentation


const boton = document.getElementById('mostrar')
const imagen = document.getElementById('imagenes')


boton.addEventListener('click', () => {
    let personaje = Math.round( Math.random() * (500 - 1) + 1 ) ;
    console.log(personaje);

    //fetch solicitar info de una pagina, trae un archivo json
    fetch('https://rickandmortyapi.com/api/character/'+personaje)  
    .then(respuesta => respuesta.json() ) //cuando trae la peticion genera una respuesta y esta la guardamos en un archivo json
    .then(json => {
        console.log(json);
        imagen.innerHTML = `<div id="tarjeta"> 
        <img src="${json.image}"> <br>
        Nombre: "${json.name}" <br>
        estatus: "${json.status}" <br>
        especies: "${json.species}" <br>
        genero: "${json.gender}" <br>
        id: "${json.id}" <br>
        locacion: "${json.location.name}" <br>
        </div>`

    })

})

/*

{id: 236, name: 'Mr. Beauregard', status: 'Dead', species: 'Alien', type: 'Parasite', …}
created
: 
"2017-12-30T17:28:28.409Z"
episode
: 
['https://rickandmortyapi.com/api/episode/15']
gender
: 
"Male"
id
: 
236
image
: 
"https://rickandmortyapi.com/api/character/avatar/236.jpeg"
location
: 
{name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
name
: 
"Mr. Beauregard"
origin
: 
{name: 'unknown', url: ''}
species
: 
"Alien"
status
: 
"Dead"
type
: 
"Parasite"
url
: 
"https://rickandmortyapi.com/api/character/236"
[[Prototype]]
: 
Object

*/