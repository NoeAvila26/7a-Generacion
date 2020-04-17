//tener los valores de x y de y, y compararlos
//si x es mayor que y, mostarar un mensaje que lo indique
//si x es menor que y. mostrar un mensaje que lo indique

//algoritmo
//declarar los valores de x y y
//preguntar si x es mayor que y
//obtener la respuesta de la comparacion
//si x es mayor que y, mostar el mensaje "x es mayor que y"
//si x no es amyor que y, mostrar el mensaje "x es menor que y"
// debugger
// var x = 9
// var y = 12

// //string interpolation

// if (x>y){
//   console.log(x, "es mayor que",y)
// }else if (x<y){
//   console.log(x,"es menor que",y)
// }else {
//   console.log(x,"es igual que",y)
// }


//ejercicio 2

//multiplicar 2 valores y verificar si el resultado de la multiplicacion es par o non
//si es par indicarlo con un msje
//si es non indicarlo con un msje


/*recibir un numero de parte del ususario y calcular el area de un 
circulo cuyo radio sea igual al numero proporcionado*/

/*
1.-declarar una variable valueUser 
2.-declarar una variable radio
3.-asignar el valor que ingresa el usuario por medio del
metodo prompt() en la variable valueUser
4.-convertir el valuUser en un valor entero con el metodo parseInt() y asignarlo a la 
 variable radio
5.-declaramos una variable resultArea
6.-declarar una constante PI con el valor 3.1416
7.-asignamos el resultado de la operacion PI*radio^2 variable resultArea
8-imprimimos la variable  resultArea */

var valueUser;
var radio;
valueUser = prompt("ingresa un numero");

radio = parseInt(valueUser)
var resultArea;
const PI=3.1416
resultArea = PI * (radio*radio)
console.log(`el resultado del area del circulo con radio ${radio} es igual a ${resultArea}`)













