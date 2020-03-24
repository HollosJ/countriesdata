const container = document.getElementById("news_container");

const cnt_flag = document.getElementById("flag");
const cnt_name = document.getElementById("country_name");
const cnt_alpha2 = document.getElementById("alpha2");
const cnt_alpha3 = document.getElementById("alpha3");
const cnt_tld = document.getElementById("country_tld");
const cnt_reg = document.getElementById("country_reg");
const cnt_subreg = document.getElementById("country_subreg");
const cnt_cptl = document.getElementById("country_cptl");
const cnt_pop = document.getElementById("country_pop");

const errorBox = document.getElementById("errorBox");

const search = document.getElementById("input");
const submit = document.getElementById("submit");

let url = "https://restcountries.eu/rest/v2/alpha/";

submit.addEventListener("click", () => {
  if (!search.value) {
    error();
  } else {
    fetch(url + search.value)
      .then(res => res.json())
      .then(out => {
        if (!out.status) {
          console.log("Output: ", out);
          //flag
          cnt_flag.src = out.flag;
          //name
          cnt_name.innerHTML = out.name;
          //alpha2code
          cnt_alpha2.innerHTML = out.alpha2Code;
          //alpha3code
          cnt_alpha3.innerHTML = out.alpha3Code;
          //topLevelDomain
          cnt_tld.innerHTML = out.topLevelDomain;
          //region
          cnt_reg.innerHTML = out.region + ": ";
          //subregion
          cnt_subreg.innerHTML = out.subregion;
          //capital
          cnt_cptl.innerHTML = out.capital;
          //population
          cnt_pop.innerHTML = out.population;
        } else {
          //DISPLAY ERROR
          errorBox.classList.remove("hidden");
          errorBox.classList.add("showing");
          window.setTimeout(() => {
            errorBox.classList.add("hidden");
            errorBox.classList.remove("showing");
          }, 6000);
        }
      })
      .catch(err => console.error(err));
  }
});
