const products = [
  {
    description: 'Cerveza Modelo Especial Botella 355 mL x 6',
    price: 94.86,
    type: 'beer'
  },
  {
    description: 'Cerveza Sol Clamato Lata 473 mL',
    price: 22,
    type: 'beer'
  },
  {
    description: 'Cerveza Heineken Lata 473 mL',
    price: 24.2,
    type: 'beer'
  },
  {
    description: 'Cerveza Victoria Original Lata 355 mL',
    price: 15.95,
    type: 'beer'
  },
  {
    description: 'DOS EQUIS XX LAGER LATA 473ML',
    price: 22,
    type: 'beer'
  },
  {
    description: 'Cerveza Corona Light Clara Lata 355 mL x 12',
    price: 172,
    type: 'beer'
  },
  {
    description: 'Cerveza Michelob Superior Light Beer Lata 355 mL',
    price: 19.25,
    type: 'beer'
  },
  {
    description: 'Cerveza Dos Equis Ambar Latón 473 mL',
    price: 22,
    type: 'beer'
  },
  {
    description: 'Cerveza Sol Michelada Lata 473 mL',
    price: 22,
    type: 'beer'
  },
  { description: 'VICTORIA LATON 473', price: 18, type: 'beer' },
  {
    description: 'Cerveza Dos Equis Ambar Botella 355 mL',
    price: 18.15,
    type: 'beer'
  },
  {
    description: 'Cerveza XX Lager 355 mL',
    price: 18.15,
    type: 'beer'
  },
  {
    description: '12 Pack Cerveza Modelo Especial 355 mL',
    price: 167.04,
    type: 'beer'
  },
  {
    description: 'Cerveza Corona Light Latón 473 mL',
    price: 17,
    type: 'beer'
  },
  {
    description: 'Cerveza Sol Chelada Lata 473 mL',
    price: 22,
    type: 'beer'
  },
  {
    description: 'Cerveza Tecate Original 355 mL x 12',
    price: 139.2,
    type: 'beer'
  },
  {
    description: 'Cerveza Indio Oscura 355 mL x 12',
    price: 174,
    type: 'beer'
  },
  {
    description: 'Cerveza Cucapá Oscura Botella 355 mL',
    price: 27.5,
    type: 'beer'
  },
  {
    description: 'Cerveza XX Lager Lata 355 mL',
    price: 16,
    type: 'beer'
  },
  {
    description: 'Cerveza Barrilito Oscura 325 mL ',
    price: 11,
    type: 'beer'
  },
  {
    description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
    price: 27.5,
    type: 'chip'
  },
  {
    description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
    price: 25.5,
    type: 'chip'
  },
  {
    description: 'Botanas Chips Papas Jalapeño 100 g',
    price: 29.7,
    type: 'chip'
  },
  {
    description: 'Botana Paketaxo Quexo 215 g',
    price: 52.8,
    type: 'chip'
  },
  {
    description: 'Botana Doritos Incógnita 64 g',
    price: 18.15,
    type: 'chip'
  },
  {
    description: 'Botana Fritos Sal y Limón 57 g',
    price: 15.4,
    type: 'chip'
  },
  {
    description: 'Botana Doritos Nacho 58 g',
    price: 17.6,
    type: 'chip'
  },
  {
    description: 'Botana Doritos Flamin Hot 62 g',
    price: 17.6,
    type: 'chip'
  },
  {
    description: 'Botanas Chips Papas Fuego Limón 100 g',
    price: 29.7,
    type: 'chip'
  },
  {
    description: 'Papas Sabritas Original 42 g',
    price: 17.6,
    type: 'chip'
  },
  {
    description: 'Papas Sabritas Adobadas 42 g',
    price: 16.5,
    type: 'chip'
  },
  {
    description: 'Cacahuates Hot Nuts Multintenso 50 g',
    price: 11,
    type: 'chip'
  },
  {
    description: 'Botana Fritos Chorizo Chipotle 57 g',
    price: 15.95,
    type: 'chip'
  },
  {
    description: 'Botana Chips Sal de Mar Bolsa 170 g',
    price: 49.5,
    type: 'chip'
  },
  {
    description: 'Botana Cheetos Poffs 100 g',
    price: 34.1,
    type: 'chip'
  },
  {
    description: 'Papas Fritas Stax Cheddar 156 g',
    price: 47.85,
    type: 'chip'
  },
  {
    description: 'Papas Sabritas Original 240 g',
    price: 75.35,
    type: 'chip'
  },
  {
    description: 'Botana Doritos Nacho 370 g',
    price: 82.5,
    type: 'chip'
  },
  {
    description: 'Chicharrón de Cerdo Sabritas 115 g',
    price: 55,
    type: 'chip'
  },
  {
    description: 'Botana Cheetos Torciditos 150 g',
    price: 34.1,
    type: 'chip'
  },
  {
    description: 'Papas Ruffles Queso 290 G',
    price: 71.5,
    type: 'chip'
  },
  {
    description: 'Dip Tostitos Queso Suave 255 g',
    price: 69.3,
    type: 'chip'
  }
]




const productTypeChip=products.filter((product) => { 
  const isChip = product.type === `chip` 
  return isChip 

})
console.log("productos de tipo chip")
console.log(productTypeChip)

const productTypeBeer=products.filter((product) => {
  const isBeer = product.type === `beer`
  return isBeer
})  
console.log("productos de tipo beer")
console.log(productTypeBeer)

const productsCheap = products.filter((product) => {
   const isCheap = product.price < 50
   return isCheap 

})
console.log("productos menores de 50")
console.log(productsCheap)


const productsExpensive = products.filter((product) => {
     const isExpensive = product.price >= 50
     return isExpensive

})
console.log("productos mayores a 50")
console.log(productsExpensive)




const productsMapped = products.map((product) => {
    return `${product.description} - ${product.type} - ${product.price}`
})
console.log(productsMapped)




// const productsDivision = products.map((product) => {
//     if (product.price%2 === 0) {
//        return  product.description
//     }
    
//     else  {
//       return product
//     }
// })
// console.log(productsDivision)



// const productsPrice = products.map((product) => {
//     if (product.price < 20){
//       product.iCantTrue = true
      

//     }
//         return product 
// })
//     console.log(productsPrice)

    const productType = products.map((product) => {
        if(product.type === "chip"){
          type = `botanas`
        }
        if(product.type === "beer"){
          type = `cerveza`
        }
        return `${type} - ${product.description} - ${product.price}`
    })
    
    console.log(productType)


const sum = products.reduce((accum, product, ) => {
  return accum + product.price
}, 0)

console.log(sum);



const beers = products.reduce((accum, product) => {
  if(product.type === "beer")  accum.push(product.description)

  return accum
}, [])

console.log(beers);

const chips = products.reduce((accum, product) => {
  if(product.type === "chip")  accum.push(product.description)

  return accum
}, [])
console.log(chips)