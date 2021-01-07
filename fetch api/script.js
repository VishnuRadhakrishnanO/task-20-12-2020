let restCountries = fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);
data.forEach((element) =>{

let card =document.createElement("div");
card.classList.add("card", "text-center", "float-start");
container.appendChild(card);


let cardHeader = document.createElement("div");
cardHeader.setAttribute("class", "card-header");
cardHeader.innerText = element.name;
card.appendChild(cardHeader);

let flag = document.createElement("img");
flag.setAttribute("class", "card-img-top");
flag.setAttribute("src", element.flag);
card.appendChild(flag);

let cardBody = document.createElement("div");
cardBody.classList.add("card-body", "text-center");
card.appendChild(cardBody);

let cap = document.createElement("p");
cap.setAttribute("id","cp")
cap.innerText = 'Capital : ' + element.capital;
cardBody.appendChild(cap);

let c_Code = document.createElement("p");
c_Code.innerText = `Country code : ` + element.alpha3Code;
cardBody.appendChild(c_Code);

let button= document.createElement('button')
button.setAttribute ("onclick", "Weather_req(this)");
var text1 = document.createTextNode("Click for weather"); 
button.appendChild(text1)
cardBody.appendChild(button);

})

}).catch((error) => {
    console.log(error);
  });

  


function Weather_req(element){
    let city_name = element.parentElement.firstElementChild.innerText.substring(10)
 
    console.log(city_name)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=cafd8fb92010e033d269a2a058c70248`).then((response) => {
      return response.json();
    }).then((data) => {
        alert(city_name+' = '+`Current temperature is ${data.main.temp } K `);
  
    }).catch((error) => {
      console.log(error);
    })
  }