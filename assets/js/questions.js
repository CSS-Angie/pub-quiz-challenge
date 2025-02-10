

function showName() {
    document.getElementById("name");.addEventListener("keydown", function(event) {
        if (event.key ==="Enter") {
            console.log(`Hello ${playerName}!`);
        }
    }
    
}