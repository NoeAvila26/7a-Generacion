// var bmentorsName = [
//   "Brenda Gonzalez",
//   "Shalem Solis",
//   "Jorge Ochoa",
//   "Rurick Maqueo",
//   "Alex Cruz",
//   "Daniel Ortega" 
// ]

// var amentorsName = [
// "veronica nemecio",
// "carolina Gayoso",
// "David Moranchel",
// "Michael Villalba",
// "Israel Salinas"

// // ]

// //iterar dentro del array
// //por cada item, obtener el nombre de cada bmentor
// //extraer la primer letara de cada palabra del nombre
// //concatenar el contenido de cada item con las iniciales, separadas por un punto
// //mostarar en consola el resultado

// // bmentorsName.forEach((name) => {
// //   var initials="";
// //   dividedName = name.split(" ");
// //   dividedName.forEach((division) => {
// //     initials += ". " + division.charAt(0)
// //   })
// //   console.log(`${name} ${initials}`)
// // })



// // bmentorsName.forEach((name) => {
// //   console.log(name)
// // var dividedName = name.split(" ")
// // var initials = "";
// // console.log(dividedName)
// // dividedName.forEach((division) => {
// //   console.log(division.charAt(0))
// //   initials += division.charAt(0) + ". "
// // })
// // console.log(`${name}, ${initials}`)
// // }) 


// var initials = "";
// const getinitials = (word) => initials += word.charAt(0) + ". "

// bmentorsName.forEach((name) => {
//  var dividedName = name.split(" ");
//  dividedName.forEach(getinitials)
//  console.log(`${name}, ${initials}`) 
//  initials = "";
// })  

// bmentorsName.forEach((name) => {
//   var dividedName = name.split(" ");
//   dividedName.forEach(getinitials) 
//   console.log(`${name}, ${initials}`)
//   initials = "" ;
// })





//funcion que reciba un Array, e imprima los elememnetos de ese array en orden alfabetico y con la primer palabra en uppercase

// const alphabeticSort  = (arrayToSort) => {
//   let sorTedArray = arrayToSort.sort()
//   return sorTedArray
// }

// const firstWordToUppercase = (arrayToTransform) =>{
//     arrayToTransform.forEach(()
//     let firstWord = item.split(" ")[0];
//     let secondWord = item.split(" ")[1];
//     let uppercased = firstWord.toUpperCase()
//   })
// }  

// const transformArray = (arrayToTransform) => {
//   let sorTedArray = alphabeticSort(arrayToTransform)
//   let upperCased = firstWordtoUpperCase(sortedArray)
// console.log(upperCasedArray)
// }







//funcion que reciba una cantida (numero), este numero sera la cantidad de veces que


// const getKodersNames = (kodersToRegister) =>{
//   let i;
//   let kodersArray = [];
//   if(isNaN(kodersToRegister)){}
//      alert("por favor ingresa un numero")
//   } else {
//     for(i=0; i < kodersToRegister; 1++){
//     let koderName = prompt ("ingresa el nombre del koder")
//     console.log(koderName)
//     kodersArray.push(koderName)
//     }
//   }
//   console.log(kodersArray)
// }




// //crear una funcion que le pida al usuario las propiedades  nombre, apellido, edad
// y el telefono de un koder y crear un objeto {koderObject} con esos datos

//pedirle al usurio mediante un prompt nombre, apellidos, edad, telefono



// createdKoderObject = (name,lastName,age,telephonNumber) => {
//     let koderObject = {name,lastName,age,telephonNumber}
//     console.log(koderObject)
    
  
// }




createdKoderObeject = () => {
     let name = prompt("escribe aqui tu nombre") 
     let lastName = prompt("escribe tu apellido")
     let age = prompt("escribe tu edad")
     let telephoneNumber = prompt("escribe tu numero telefonico")
     let koderObject = {name, lastName, age, telephoneNumber}
     console.log(koderObject)

}
createdKoderObeject()
