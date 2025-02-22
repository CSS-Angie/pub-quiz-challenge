// Displays Name of Player on first page after having submitted a name
const confirmName = document.getElementById("confirm");
const inputName = document.querySelector("input");
let displayName = document.getElementById("display-name");

console.log("const")
confirmName.addEventListener("click", () => {
    console.log("click")
    const inputValue = inputName.value;
displayName.innerHTML = `Hello ${inputValue}!`;
displayName.style.border = "1px solid #0069b0";
displayName.style.backgroundColor = "#f88839";
displayName.style.color = "#151c4a";
});

// Open game after confirming name
function startChallenge() {
   
document.getElementById("btn-start").onclick = function() {
    let displayName = document.getElementById("display-name");
    if (displayName.innerHTML === "") {
        alert(`Please confirm your name`);
console.log("alert")
    } else {
        console.log("html")
        window.location.href = "https://css-angie.github.io/pub-quiz-challenge/the-pub-quiz-challenge.html";
    }
}
}
startChallenge();


