import "./styles.css";
import { populateDom } from "./modules/dom";
import { weatherBuilder } from "./modules/Builder";

const searchForm = document.getElementById("search");
const searchTerm = document.getElementById("searchTerm");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await populateDom.render(searchTerm.value) 
}); 
