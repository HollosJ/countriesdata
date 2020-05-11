const cnt_flag = document.getElementById("flag");
const cnt_name = document.getElementById("country_name");
const cnt_alpha2 = document.getElementById("alpha2");
const cnt_alpha3 = document.getElementById("alpha3");
const cnt_tld = document.getElementById("country_tld");
const cnt_reg = document.getElementById("country_reg");
const cnt_subreg = document.getElementById("country_subreg");
const cnt_cptl = document.getElementById("country_cptl");
const cnt_pop = document.getElementById("country_pop");

const dropDown = document.getElementById("dropSearch");

let url = "https://restcountries.eu/rest/v2/alpha/";
let allUrl = "https://restcountries.eu/rest/v2/all";

//WRITE ALL COUNTRIES TO DROP DOWN
initDropdown = () => {
  fetch(allUrl)
    .then((res) => res.json())
    .then((out) => {
      for (let i = 0; i < out.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = out[i].alpha3Code;
        newOption.innerText = out[i].name;
        newOption.classList.add("option");
        dropDown.appendChild(newOption);
      }
    });
};
search = () => {
  let selected = dropDown.options[dropDown.selectedIndex].value;
  fetch(url + selected)
    .then((res) => res.json())
    .then((out) => {
      //Changing HTML contents
      cnt_flag.src = out.flag;
      cnt_name.innerHTML = out.name;
      cnt_alpha2.innerHTML = out.alpha2Code;
      cnt_alpha3.innerHTML = out.alpha3Code;
      cnt_tld.innerHTML = out.topLevelDomain[0];
      cnt_reg.innerHTML = out.region + ": ";
      cnt_subreg.innerHTML = out.subregion;
      cnt_cptl.innerHTML = out.capital;
      cnt_pop.innerHTML = out.population.toLocaleString("en-US");
    })
    .catch((err) => console.error(err));
};

dropDown.addEventListener("change", () => {
  search();
});

initDropdown();
