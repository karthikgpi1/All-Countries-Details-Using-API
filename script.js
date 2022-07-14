
fetch(`https://restcountries.com/v3.1/all`)
.then((resp) => resp.json())
.then((countries) => {
    countries.forEach((country) => {            
        createFlag(country)
        console.log(country);
    }); 
})
.catch((err) => console.log(err));
//-----------------------

function createFlag ({flags, name, population, region, capital}) {
const info = document.createElement("div");
info.setAttribute("class", "container");

info.innerHTML = `
<div class = "flag-container">
<img class ="flag" src =${flags.svg} width = "250px" height = "150px">
</div>

<div class = "details">
<h2> ${name.common} </h2>
<p><b>Population:</b>${population}</p>
<p><b>Region:</b>${region}</p>
<p><b>Capital:</b>${capital}</p>
</div>`; 

document.body.append(info);
}