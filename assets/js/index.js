
// Displays Name of Player on first page after having submitted a name


const confirmName = document.getElementById("confirm");
const inputName = document.querySelector("input");
const displayName = document.getElementById("display-name");

confirmName.addEventListener("click", () => {
const inputValue = inputName.value;
displayName.innerHTML = `Hello ${inputValue}!`;
displayName.style.border = "1px solid #0069b0";
displayName.style.backgroundColor = "#f88839";
displayName.style.color = "#151c4a";
});

//Name in local storage for last page
/**localStorage.setItem(inputName, value);
local
document.getElementById("display-name").innerHTML = localStorage.getItem("input-name");
*/

