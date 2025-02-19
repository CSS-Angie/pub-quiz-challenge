
// Displays Name of Player on first page and last page, after having submitted a name

const confirmName = document.getElementById("confirm");
const inputName = document.querySelector("input");
const displayName = document.getElementById("display-name");

confirmName.addEventListener("click", () => {
const inputValue = inputName.value;
displayName.innerHTML = `Hello ${inputValue}!`;
});

