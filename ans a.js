let url="https://restcountries.com/v3.1/all"


function reqListener() {
   let countries= JSON.parse(this.responseText);
//    console.log(countries)
  let country =    countries.filter(function(country) { 
    if(country.continents[0]=== "Asia"){
          console.log(country.name.common)
    
    }
        
})
      console.log(country)
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", url);
  req.send();
  


// let a=[1,2,3,4,5,6,7,8,8]
// let d=  a.filter((a)=> {
//     return a
// })
// console.log(d)





