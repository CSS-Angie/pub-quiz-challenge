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

// Open game after confirming name
function startChallenge() {
    let startButton = document.getElementById("btn-start");
    function redirect() {
        window.location.href="https://css-angie.github.io/pub-quiz-challenge/the-pub-quiz-challenge.html";
        };
if (displayName.innerHTML.value !=="") {
    alert(`Please confirm your name`);
    console.log("alert")
} else {
     console.log("html")
    redirect();
    
  
};
}



startChallenge();
//Name in local storage for last page
/**localStorage.setItem("input", "inputValue");
document.getElementById("local-name").innerHTML = localStorage.getItem("input");

`<p ><span id="local-name">Name,<br>here's your final score!</span></p>`
*/
