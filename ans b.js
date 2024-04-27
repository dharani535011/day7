let url="https://restcountries.com/v3.1/all"


function reqListener() {
   let countries= JSON.parse(this.responseText);
//    console.log(countries)
  let country =    countries.filter(function(country) { 
    if(country.population <= 200000){
          console.log(country.name.common)
    
    }
        
})
      console.log(country)
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", url);
  req.send();
  