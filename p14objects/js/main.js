// //crear una funcion que le pida al usuario las propiedades  nombre, apellido, edad
// y el telefono de un koder y crear un objeto {koderObject} con esos datos

//pedirle al usurio mediante un prompt nombre, apellidos, edad, telefono



// metodo 1

createdKoderObject = (name,lastName,age,telephoneNumber) => {
    let koderObject = {name,lastName,age,telephoneNumber}
    console.log(koderObject)
    
  
}


//metodo2

createdKoderObeject = () => {
  let name = prompt("escribe aqui tu nombre") 
  let lastName = prompt("escribe tu apellido")
  let age = prompt("escribe tu edad")
  let telephoneNumber = prompt("escribe tu numero telefonico")
  let koderObject = {name, lastName, age, telephoneNumber}
  console.log(koderObject)

}
createdKoderObeject()

//metodo3

const createdKoderObject = (name,lastName,age,telephoneNumber) => {
let koderObject={
  name,
  lastName,
  age,
  telephoneNumber,
};
for (prop in koderObject) {
  let prop = prompt(`ingrese el ${prop} del objeto`)
  koderObject[prop] = prop;

}
console.log(koderObject);

}
createdKoderObeject()
