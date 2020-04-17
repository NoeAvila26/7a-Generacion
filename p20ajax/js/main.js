const getKoderData = () =>{
  let Name = document.getElementById("name-koder").value
  let Phone = document.getElementById("cell-number").value
  let Email = document.getElementById("mail-address").value;
  
  let koderObject = {Name,Phone,Email}
  console.log(koderObject)
  saveKoder(koderObject)
}

let saveKoderBtn = document.getElementById("save-koder")
saveKoderBtn.addEventListener("click", getKoderData)


const addKoderTodb = (koderToAdd) => {
  // console.log("get-koders")
  let xhttp = new XMLHttpRequest()
  
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          
          // let response = JSON.parse(this.responseText)
          console.log(this.responseText)
      } 
  }
  //abrimos la peticion
  xhttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/noemi/koders/.json",true)
  //enviamos peticion
  xhttp.send(JSON.stringify(koderToAdd))
}


const getKodersFromDb = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200){
      kodersCollection = JSON.parse(this.responseText)
      console.log(kodersCollection)
    }
  }
  xhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/noemi/koders/.json",true)
  xhttp.send()
}

getKodersFromDb();

const printKoders = () => {
  for(koder in kodersCollection){
    console.log(kodersCollection[koder])
    document.write(kodersCollection[koder].name)
    console.log(koder)

  }
}

const deleteKoderInDb = (koderId) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status == 200){
      console.log(this.responseText)
    }
  }
  xhttp.open("DELETE","https://javascript-ajax-d0ce6.firebaseio.com/noemi/koders/${koderId}.json",true)//preparando la petision asincrona
  xhttp.send()
}

















