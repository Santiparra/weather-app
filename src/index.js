import "./styles.css";
import { populateDom } from "./modules/dom";
import { weatherBuilder } from "./modules/Builder";


const searchForm = document.getElementById("search");
const searchTerm = document.getElementById("searchTerm");
const switchLang = document.getElementById("language")
const switchUnits = document.getElementById("units")

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await populateDom.render(searchTerm.value) 
}); 
populateDom.render("montevideo");

switchLang.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("working")
  /* await populateDom.render(searchTerm.value)  */
}); 

switchUnits.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("working")
  /* await populateDom.render(searchTerm.value)  */
});