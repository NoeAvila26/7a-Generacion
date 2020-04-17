// var figure
// figure = prompt(`esciba de que figura geometrica desea calcular su area triangle, rectangle, circle`)
// console.log(figure)


// var base;
// var height;
// var radius;
// const pi = 3.1416

// switch(figure){
//   case `triangle`:
//     base = prompt(`introduce la base del triangulo`);
//     height = prompt(`introduce la altura del triangulo`);
//     console.log(`el area del traingulo es ${(base * height)/2 }`);
//     break

//   case `rectangle`:
//     base = prompt(`introduce la base del rectangulo`);
//     height = prompt(`introduce la altura del rectangulo`);  
//     console.log(`el area del rectangulo es ${base * height}`)
//     break

//   case `circle`:
//     radius = prompt(`introduce el radio del circulo`);
//     console.log(`el area de un circulo es ${pi*(radius*radius)}`)

// }



// var figure

// figure = prompt(`escriba que figura geometrica desea que se calcule su area triangle, rectangle, circle`)

// var base
// var height
// var radius



// switch(figure) {
//   case `triangle`:
//     base = prompt(`ingresa la base de un triangulo`);
//     height = prompt(`ingresa la altura de un triangulo`);
//     console.log(`el area de un traingulo es ${(base*height)/2}`)
//     break
//   case `rectangle`:
//     base = prompt(`ingresa la base de un rectangulo`);  
//     height = prompt(`ingresa la altura de un rectangulo`)
//     console.log(`el area de un rectangulo es ${base*height}`)
//   case `circle`:
//     radius = prompt(`ingresa el radio de un circulo`)  
//     console.log(`el area de un circulo es ${Math.PI * Math.pow(radius,2)}`)
//     break

//   default: console.log(`the geometric figure not available`)

// }



// recibir del usuario los datos de 3 lados de un triangulo

// var size1;
// size1 = parseInt(prompt("ingresa la base de un triangulo"))
// var size2;
// size2 = parseInt(prompt("ingresa la altura de un triangulo"))
// var size3;
// size3 = parseInt(prompt("ingresa el lado A de un triangulo "))
// var size4;
// size4 = parseInt(prompt("ingresa el lado b de un triangulo"))
// // con base en esos datos determinar el area de del triangulo y mostrarla en un mensaje
// resultArea = (size1 * size2)/2
// console.log(`el area del trianngulo es ${resultArea}`)
// // en otro mensaje indicar si el triangulo es isoseles equilatero o escaleno
// if(size1 = size2 = size4){
//   console.log("el triangulo es equilatero")
// }else if(size1 = size3){
//   console.log("el triangulo es isoseles")
// }else{
//   console.log("el triangulo es escaleno")
// }


// let passWordDb = `pepe123`
// let input = `pepe123`

// let result = passWordDb == input;
// if (result == true){
// console.log(`login correcto`)
// }
// if (result == false){
// console.log(`login incorrecto`)
// }


// let passWordDb = `noe26`
// let input = `noe26`

// let result = passWordDb == input;

// if (result == true) {
//   console.log(`correct pasword`)
// }else {
//   console.log(`incorrect pasword`)
// }




//string methods

//practica 1

// obtener el nombre del usuario e indicarle cuantos caracteres tiene su nombre

//algoritmo

//crear una variable userName
//asignarle el metodo prompt a userName donde solicitemos al usuario su nombre completo
//y mediante la propiedad length determinar cuantos caracteres tiene su nombre
//imprimirlo mediante un console .log

// var userName;
// var numbChar
// userName = prompt("ingresa tu nombre completo")

// numbChar = userName.length;
// console.log(`tu nombre  tiene ${numbChar} caracteres`)

// paractica 2

// obtener nombre del usuario contar cuanto caracteres tiene si su nombre si tiene menos de 15 caracteres indicarle mediante un msje que su nombre es muy corto y si tiene mas de 15 caracteres indicarle que su nombre es muy largo

// algoritmo

// crear una variable userName
// asignarle el metodo prompt a userName donde solicitemos al usuario su nombre completo
// crear una variable numbChar
// y mediante la propiedad length determinar cuantos caracteres tiene su nombre
// imprimirlo mediante un console .log
// y mediante las condicones if else determiar si el valos es menor o mayor a 15 e imprimir dentro de un cosnle .log


// if(numbChar > 15 ){
//  console.log("nombre muy largo")
// }else if(numbChar < 15 ){
//  console.log("nombre muy corto")
// }else if(numbChar == 15){
//   console.log("tu nombre tiene 15 caracteres")
// }


// //practica 3

// //obtener el nombre completo del usuario
// //contar cuantas vocales tiene


// var numberVocal
//  numberVocal = userName.match(/[aeiou]/gi).length
// console.log(`su nombre tiene ${numberVocal} vocales`)




// practica 4


// cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante y cada estudiante complementa al estudiante que tiene a su lado
// buscar cuantas palabra estudiante hay en el texto
// y reemplazarlas por koder

// algoritmo

// crear una variable studentCount asignarle el metodo .match para que necuntre todas las coincidencias con la palabra estudiante y despues mediante un .length que te arroje mediante un numero cuantos estudiantes hay
// despues crear otra variable changeCount donde le asignemos el metodo .replace y sustituir estdiante por koder

// var estudentText = "cada estudiante tiene su ritmo, cada estudiante tiene su talento, y  cada estudiante complementa al estudiante que tiene a su lado"

// var result = estudentText.match(/estudiante/g).length
// console.log(result)

// var changeCount = estudentText.replace(/estudiante/g,"koder")
// console.log(changeCount)



// let score = 70;      //control de flujo

// if (score > 30) {
//   console.log(`you need to practice more`)
// }
// else if (score > 15) {
//   console.log(`estas mejorando`)
// } else {
//   console.log(`you need to fallow this tutorial`)

// }

//switch
// let typeCard = `card`;      //otro flujo de control

// switch(typeCard) {
//   case `debit card`:
//   console.log(`this a debit card`);
//   break;
//   case `credit card`:
//   console.log(`this is a credit card`)
//   break;
//   default:
//     console.log(`no card`)
// }

