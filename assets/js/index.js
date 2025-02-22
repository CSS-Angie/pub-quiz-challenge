// Displays Name of Player on first page after having submitted a name
const confirmName = document.getElementById("confirm");
const inputName = document.querySelector("input");
const displayName = document.getElementById("display-name");

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
    if (displayName === undefined) {
        alert(`Please confirm your name`);
console.log("alert")
    } else if (displayName !==""){
        console.log("html")
        window.location.href = "https://css-angie.github.io/pub-quiz-challenge/the-pub-quiz-challenge.html";
    } else {
     alert(`Please retry`);  
     console.log("retry")
    }
}
}

/**function startChallenge() {
    document.getElementById("btn-start").addEventListener("click", startChallenge);
    let displayName = document.getElementById("btn-start");
if (displayName.innerHTML.value !=="") { 
    alert(`Please confirm your name`);
    console.log("alert")
} else {
    console.log("html")
    redirect();
};
}
*/

startChallenge();
