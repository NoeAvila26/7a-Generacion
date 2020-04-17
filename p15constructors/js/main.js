function Koder(name, lastName, birthDate, phone) {
  this.name = name,
    this.lastName = lastName,
    this.birthDate = birthDate,
    this.phone = phone,
    this.hobbies = [],
    this.likes = "koding",
    this.showFullName = function () {
      return this.name + " " + this.lastName
    }
  this.getInitials = function () {
    let initials = ""
    let fullName = `${this.name} ${this.lastName}`.split(" ")// al aplicar el metodo .split te regresa un array
    fullName.forEach((wordName) => {
      console.log(wordName)
      initials += wordName.substring(0, 1)
    })
    return initials
  },
    this.getShortedData = function () {
      let shortDay = `${this.birthDate}`.replace(/-/g, "")
      return shortDay
    }

}

var koder1 = new Koder("David", "Cermeño Moranchel", "14-02-1995", "5555555555")


var kodersArray = [
  {
    name: "Israel",
    lastName: "Salinas Martinez",
    birthDate: "27-09-1989",
    phone: "5543788096"
  },
  {
    name: "David",
    lastName: "Moranchel Martinez",
    birthDate: "27-09-1989",
    phone: "5543788096"
  }
]

var newKodersArray = []

kodersArray.forEach((koder) => {
  let koderObject = new Koder(koder.name, koder.lastName, koder.birthDate, koder.phone)
  newKodersArray.push(koderObject)
})

const showNames = () => {
  newKodersArray.forEach((koder) => {
    koder.showFullName()
  })
}



function Animal(name, specie, color) {
  this.name = name,
    this.specie = specie,
    this.color = color

}



var gato = new Animal("Fenrir", "Gato", "gris")


//necesito crear 3 tipos de objeto con las propiedas nombre, especie, color 
//preguntar al usuario cuantos felinos cuantos perros y cuantos viviparos quiero registrar y cada que lo ingrese que se guarden en su coleccion correspondiente
//tipo felino 
//tipo perro
//tipo oviparo

// var quantityCats = parseInt(prompt("Cuantos gatos quieres ingresar"))
// var i
// var newFelineArray = []
// for (i = 0; i < quantityCats; i++) {
//   let nameCat = prompt("name")
//   let specieCat = prompt("specie")
//   let colorCat = prompt("color")
//   var Gato = new Feline(nameCat, specieCat, colorCat)
//   newFelineArray.push(Gato)
// }
// console.log(newFelineArray)

function Feline(name, specie, color) {
  this.name = name,
  this.specie = specie,
  this.color = color
}

const registerCats = () => {
  var quantityCats = parseInt(prompt("Cuantos gatos quieres ingresar"))
  var i
  var newFelineArray = []
  for (i = 0; i < quantityCats; i++) {
    let nameCat = prompt("name")
    let specieCat = prompt("specie")
    let colorCat = prompt("color")
    var Gato = new Feline(nameCat, specieCat, colorCat)
    newFelineArray.push(Gato)
  }
}
// registerCats()







// var Gato = new Feline("Don gato", "Gato", "amarillo")

// var felineArray = [
//   {
//     name:"Don gato",
//     specie:"Gato",
//     color:"yellow"
//   },
//   {
//     name:"Benito",
//     specie:"Gato",
//     color:"blue"
//   }
// ]

// var newFelineArray = []

// felineArray.forEach((feline) => {
//   let felineObject = new Feline(feline.name, feline.specie, feline.color)
//   newFelineArray.push(felineObject)
// })


// function Perruno(name,specie,color){
//   this.name = name,
//   this.specie = specie,
//   this.color = color
// }

// var dog = new Perruno("Firulais","Perro","cafe")

// var dogArray = [
//   {
//     name:"rex",
//     specie:"Perro",
//     color:"mostaza"
//   },
//   {
//     name:"Perro",
//     specie:"Perro",
//     color:"Negro"
//   }
// ]

// var newDogArray = []

// dogArray.forEach((perruno) =>{
//   dogObject = new Perruno(perruno.name,perruno.specie,perruno.color)
//   newDogArray.push(dogObject)
// })