import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="drink"]');
let timeoutId;

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    const value = input.value;

    if (!value) return;
    presentDrinks(`${baseURL}${value}`);
  }, 500);
});

/* Original
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
*/
