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
        }
      })
      .catch(err => console.error(err));
  }
});

//ERROR FUNCTION
error = () => {
  console.error("EMPTY or ILLEGAL search term");
  alert(
    "EMPTY or ILLEGAL search term \n See: https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes"
  );
};
