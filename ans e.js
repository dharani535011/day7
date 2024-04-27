  
let url="https://restcountries.com/v3.1/all"


function reqListener() {
   let countries= JSON.parse(this.responseText);
//    console.log(countries)
   const countriesusd = countries.filter(country => {
    return country.currencies && country.currencies.USD;
  });

  if (countriesusd.length > 0) {
    console.log("Countries that use US Dollars as currency:");
    countriesusd.forEach(country => {
      console.log(country.name.common);
    });
  } 

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", url);
  req.send();
  