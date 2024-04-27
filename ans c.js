let url="https://restcountries.com/v3.1/all"


function reqListener() {
   let countries= JSON.parse(this.responseText);
//    console.log(countries)
    countries.forEach(country => {
    console.log("country name :",country.name.common,", capital name :",country.capital[0],", flag img :",country.flags.png)}
        
)
      
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", url);
  req.send();
  