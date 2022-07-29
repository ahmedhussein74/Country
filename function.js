let btn = document.querySelector("#search");
let country = document.querySelector("#countryName");

btn.addEventListener("click", () => {
  fetch(`https://restcountries.com/v2/name/${country.value}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("root").innerHTML = `
        <main data-aos="zoom-in-up">
          <img src=${data[0].flags.png} class="d-block mx-auto">
          <div class="info rounded">
            <span>Country</span><span>: ${data[0].name}</span>
            <span>Capital</span><span>: ${data[0].capital}</span>
            <span>Language</span><span>: ${data[0].languages[0].name}</span>
            <span>Population</span><span>: ${data[0].population}</span>
            <span>Continent</span><span>: ${data[0].region}</span>
          </div>
        </main>`;
    })
    .catch((err) => alert("You entered Wrong city name"));
});

AOS.init({
  duration: 1200,
});
