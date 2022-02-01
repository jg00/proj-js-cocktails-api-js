import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);

  // display
  const section = await displayDrinks(data);

  // manage state
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
