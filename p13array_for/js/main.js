// //pedir al usuario la cantidad de koders a registrar
// //pedir tantos nombres de koder como el ususario haya indicado
// //guardar cada nombre de cada koder en una coleccion
// //de cada koder imprimir unicamente el el primer nombre

// //!
// //crear una variable accountant
// //mediante el metodo prompt solicitamos la cantidad de koders y asignamos a accountant




// var total

// total = prompt("ingresa el total de koders");

// var nameCollection=[];
// var i;
// for(i=0;i<total;i++){
//   nameCollection[i]= prompt(`dame el nombre completo ${i}`)
//   var res = nameCollection[i].split(" ");
//   console.log(res[0])
// }

//metodo 2

// var countKoders;
// var koders = [];

// countKoders = prompt('¿Cuantos koders desea agregar?');
// countKoders = parseInt(countKoders);

// var i;
// for (i = 0; i < countKoders; i++) {
//     var koder;
//     koder = prompt(`¿Cual es el nombre del koder num ${i+1}`);
//     koders.push(koder);
// }

// koders.forEach((koder, index) => {
//     var firstName;
//     firstName = koder.split(" ", 1);
//     console.log(`El nombre del Koder ${index + 1} es: ${firstName[0]}`);
// }) 


//ejercicio adicional

// solicita un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero con el mensjae "es par" o es "impar"
// si el numero es 5 el resultado sera
// 1-es impar
// 2-es par
// 3-es impar
// 4-es par
// 5-es impar


// var number
// var i
// number = parseInt(prompt(`introduce un numero`))
// for(i=1 ; i<=number ; i++){
//   if(i%2==0){
//     console.log(`${i} es par`);
//   } else{
//     console.log(`${i} es impar`);
//   }
// }
  




