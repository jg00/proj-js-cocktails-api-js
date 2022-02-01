const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    // e.preventDefault(); // continue with normal navigation
    const id = e.target.parentElement.dataset["id"];
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
