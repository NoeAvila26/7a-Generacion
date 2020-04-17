var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

// Teniendo el array kodersDb, realizar las siguientes operaciones:
// 1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10

var filteredByPractices = kodersDb.filter(koder => koder.deliveredPractices < 10)
console.log(filteredByPractices) 

// 2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20

var filteredByAssistance = kodersDb.filter(koder => koder.totalAssistance <20)
console.log(filteredByAssistance)

// 3.- Obtener el promedio general de prácticas entregadas

var practicesAverages = kodersDb.reduce((accum,koder) => {
    return accum += koder.deliveredPractices
},0)
console.log(practicesAverages)

// 4.- Obtener el promedio general de asistencias

var assistancesAverage = kodersDb.reduce((accum,koder) => {
    return accum += koder.totalAssistance
},0)
console.log(assistancesAverage)

var totalAssistances = assistancesAverage / kodersDb.length


// 5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
// <tr>
//     <td>{número de koder}</td>
//     <td>{nombre completo del koder}</td>
//     <td>{prácticas del koder}</td>
// </tr>

filteredByPractices.forEach((koder,index) => {
  let koderRow = document.createElement("tr")

  let koderNumberCell = document.createElement("td");
  let koderNumberText = document.createTextNode(index + 1);

  let koderNameCell = document.createElement("td");
  let koderNameText = document.createTextNode(`${koder.name} ${koder.lastName}`);

  let koderPracticesCell = document.createElement("td")
  let koderPracticesText = document.createTextNode(`${koder.deliveredPractices}`)

  koderNumberCell.appendChild(koderNumberText)
  koderNameCell.appendChild(koderNameText)
  koderPracticesCell.appendChild(koderPracticesText)

  koderRow.appendChild(koderNumberCell)
  koderRow.appendChild(koderNameCell)
  koderRow.appendChild(koderPracticesCell)

  let practicesContainer = document.getElementById("practices-container")
  
  practicesContainer.appendChild(koderRow)

 

})

// document.createElement()
// document.createTextNode()
// element.appendchild()
// document.getElementById()





// 6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
// <tr>
//     <td>{número de koder}</td>
//     <td>{nombre completo del koder}</td>
//     <td>{asistencias del koder}</td>
// </tr>


filteredByAssistance.forEach((koder,index) => {
    let koderRow = document.createElement("tr")
  
    let koderNumberCell = document.createElement("td");
    let koderNumberText = document.createTextNode(index + 1);
  
    let koderNameCell = document.createElement("td");
    let koderNameText = document.createTextNode(`${koder.name} ${koder.lastName}`);
  
    let koderAssistancesCell = document.createElement("td")
    let koderAssistancesText = document.createTextNode(`${koder.totalAssistance}`)
  
    koderNumberCell.appendChild(koderNumberText)
    koderNameCell.appendChild(koderNameText)
    koderAssistancesCell.appendChild(koderAssistancesText)
  
    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderAssistancesCell)
  
    let assistancesContainer = document.getElementById("assistances-container")
    assistancesContainer.appendChild(koderRow)
  })

// 7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3


var practicesAverageContainer = document.getElementById("practices-average")
var practicesAverageText = document.createTextNode(practicesAverages)

practicesAverageContainer.appendChild(practicesAverageText)




// 8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4



var assistancesAverageContainer = document.getElementById("assistance-average")
var assitancesAverageText = document.createTextNode(assistancesAverage)

assistancesAverageContainer.appendChild(assitancesAverageText)




// ***Notas***
// Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

//     var someVar = objeto.propiedad

// Podemos crear contenido dinámico insertando variables mediante la sintaxis

//     ${someVar}

// así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

// var someObject = {
//     songName = "Lago en el cielo",
//     author = "Gustavo Cerati"
// }

// var mySong = someObject.songName;
// var songAuthor = someObject.author;

// var someElement = document.createElement("p");
// -(con esto obtenemos un elemento <p></p>)

// var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
// -(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

// y después podemos crear un nodo completo:

// someElement.appendChild(someText)
// -(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


// Happy Hacking!!!