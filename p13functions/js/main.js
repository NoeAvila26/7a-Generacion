var bmentorsName = [
  "brenda gonzalez",
  "shalem solis",
  "jorge ochoa",
  "rurick maqueo",
  "alex cruz",
  "daniel ortega" 
]

var amentorsName = [
"veronica nemecio",
"carolina gayoso",
"david moranchel",
"michael villalba",
"israel salinas"

]

// // // iterar dentro del array
// // // por cada item, obtener el nombre de cada bmentor
// // // extraer la primer letra de cada palabra del nombre
// // // concatenar el contenido de cada item con las iniciales, separadas por un punto
// // // mostarar en consola el resultado

bmentorsName.forEach((name) => {
  //una variable bmentorsName a la cual se le aplica el metodo forEach el cual itera dentro de cada item del array y el cual recibe el parametro item
  var initials="";
  //crea una variable initials a la cual se le asigna un espacio vacio mediante unas comillas3
  dividedName = name.split(" ");
  dividedName.forEach((division) => {
    initials += ". " + division.charAt(0)
  })
  console.log(`${name} ${initials}`)
})



amentorsName.forEach((name) => {
  console.log(name)
var dividedName = name.split(" ")
var initials = "";
console.log(dividedName)
dividedName.forEach((division) => {
  console.log(division.charAt(0))
  initials += division.charAt(0) + ". "
})
console.log(`${name}, ${initials}`)
}) 


// // var initials = "";
// // const getinitials = (word) => initials += word.charAt(0) + ". "

// // bmentorsName.forEach((name) => {
// //  var dividedName = name.split(" ");
// //  dividedName.forEach(getinitials)
// //  console.log(`${name}, ${initials}`) 
// //  initials = "";
// // })  

// // bmentorsName.forEach((name) => {
// //   var dividedName = name.split(" ");
// //   dividedName.forEach(getinitials) 
// //   console.log(`${name}, ${initials}`)
// //   initials = "" ;
// // })





// //funcion que reciba un Array, e imprima los elememnetos de ese array en orden alfabetico y con la primer palabra en uppercase

const alphabeticSort  = (arrayToSort) => {
  let sorTedArray = arrayToSort.sort()
  return sorTedArray
}

const firstWordToUppercase = (arrayToTransform) => {
    arrayToTransform.forEach((item) => {
    let firstWord = item.split(" ")[0];
    let secondWord = item.split(" ")[1]; 
    let upperCase = firstWord.toUpperCase()
    let firstChar =  firstWord.charAt(0).toUpperCase() // Primera letra mayúscula
    let restFirst= firstWord.slice(1) // El resto de la palabra en minúscula
    let name = firstChar + restFirst  
    let completeName = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + " " + secondWord  
    
    console.log(completeName)

    
  })
  
}  
 firstWordToUppercase(bmentorsName)
 firstWordToUppercase(amentorsName)

const transformArray = (arrayToTransform) => {
  let sorTedArray = alphabeticSort(arrayToTransform)
  let upperCased = firstWordtoUpperCase(sortedArray)
console.log(upperCasedArray)
}







//funcion que reciba una cantida (numero), este numero sera la cantidad de veces que


// const getKodersNames = () => {
//   let i;
//   let kodersArray = [];
//   let kodersToRegister = prompt("ingrese total koders")
//   if(isNaN(kodersToRegister)){
//      alert("por favor ingresa un numero")
//   } else {
//     for(i=0; i < kodersToRegister; i++)  {
//     let koderName = prompt("ingresa el nombre del koder")
//     kodersArray.push(koderName)
//     }
//    }
//    console.log(kodersArray)
//   }
   
// getKodersNames()


// forEach

// var somearray = [1,2,3,4,5]

// somearray.forEach((number) => {
//   console.log(`El numero es: ${number}`)
// })

// // filter

// var filteredArray = somearray.filter((number) => {
//   return number % 2 === 0
// })
// console.log(filteredArray)

// // map

// var mappedArray = somearray.map((number) => {
//   return number * 10
// })
// console.log(`mapped Array:`)
// console.log(mappedArray)

// // reduce

// var reducedArray = somearray.reduce((reducedArray,number) => {
//   return reducedArray + number

// })
// console.log("reduced array:")
// console.log(reducedArray / someArray.length)





// var practicasDeKoders = [
  
//   [
//     0,
//     1,
//     1,
//     1,
//     0,
//     1
//   ],
//   [
//    1,
//    1,
//    1,
//    1,
//    1,
//    1 
//   ],
//   [
//     1,
//     1,
//     1,
//     0,
//     0,
//     0
//   ],
// ]

// var practicasDeNoe = practicasDeKoders[0].reduce((totalDePracticas, practica) => 
// totalDePracticas + practica)

// var practicasDeIvan = practicasDeKoders[1].reduce((totalDePracticas, practica) =>
// totalDePracticas + practica)