const questions = [ 
    {question:"Who was the first disney character created by Walt Disney?",		
        answers: [  {text: "Alladin", correct: false},	
                    {text: "Donald Duck", correct: false},	
                    {text: "Mickey Mouse", correct: true},	
        ]},
    {question:"Which painting is also known as La Joconde?",		
        answers: [  {text: "Girl with the pearl earring", correct: false},	
                    {text: "Mona Lisa", correct: true},	
                    {text: "Woman with a mirror", correct: false},	
                ]},
    {question:"Who sings Poker Face?",		
        answers: [   {text:"Lady Gaga", correct: true},	
                     {text:"Madonna", correct: false},	
                     {text:"Taylor Swift", correct: false},	
                    ]},
    {question:"	What are the names of Cinderella’s evil stepsisters?",		
        answers: [   {text:"Anastasia and Drizella"	, correct: true},	
                     {text:"Gizelle and Anabelle"	, correct: false},	
                     {text:"Florence and Marge"	, correct: false},	
                    ]},
    {question:"	Which College Is Elle Applying for In Legally Blonde?",		
        answers: [    {text:"Yale", correct: false},	
                      {text:"Harvard", correct: true},	
                      {text:"Princeton", correct: false},	
                    ]},
    {question:"	What’s the name of the sword in The Sword In The Stone?",		
        answers: [    {text:"Glamdring", correct: false},	
                      {text:"Callandor", correct: false},	
                      {text:"Excalibur", correct: true},	
                    ]},
    {question:"	Stark Industries is associated with which fictonal superhero?",		
        answers: [   {text:"Iron Man", correct: true},	
                     {text:"Iron Fist", correct: false},	
                     {text:"aptain America", correct: false},	
                    ]},
    {question:"	Which Museum Is Featured In Night at the Museum?",		
        answers: [   {text:"Museum of Natural History"	, correct: true},	
                     {text:"The Smithsonian"	, correct: false},	
                     {text:"National Museum of the American Indian"	, correct: false},	
                    ]},
    {question:"	The Playstation game console was developed by which company?" ,		
        answers: [   {text:"intendo", correct: false},	
                     {text:"Sega", correct: false},	
                     {text:"Sony", correct: true},	
                    ]},
    {question:"	Which part of his body did Charlie Chaplin insure?",		
        answers: [   {text:"Moustache", correct: false},	
                     {text:"Hands", correct: false},	
                     {text:"Feet", correct: true},	
                    ]},
    {question:"	What is the name of the element with the chemical symbol ‘He’?",		
        answers: [  {text:"	Helium", correct: true},	
                    {text:"	Hydrogen", correct: false},	
                    {text:"	Holmium", correct: false},	
                ]},
    {question:"	Which animal can be seen on the Porsche logo?",		
        answers: [  {text:"	Cougar", correct: false},	
                    {text:"	Horse", correct: true},	
                    {text:"	Cheetah", correct: false},	
                ]},
    {question:"	What type of scientist studies living plants?",		
        answers: [  {text:"	Paleontologist", correct: false},	
                    {text:"	Entomologist", correct: false},	
                    {text:"	Botanist", correct: true},	
                ]},
    {question:"	What do you call traditional Japanese female entertainers who act as hostesses and whose skills include performing various Japanese arts?",		
        answers: [  {text:"	Hakama", correct: false},	
                    {text:"	Geisha", correct: true},	
                    {text:"	Maiko", correct: false},	
                ]},
    {question:"	The Aztecs even used cocoa beans as what?",		
    answers: [      {text:"	Currency", correct: true},	
                    {text:"	Drugs", correct: false},	
                    {text:"	Weapon decorations", correct: false},	
                ]},
    {question:"	“Mama Mia” is based on a song by which Swedish musical act?",		
        answers: [  {text:"	ABBA", correct: true},	
                    {text:"	Bee Gees", correct: false},	
                    {text:"	Queen", correct: false},	
                ]},
    {question:"	In Norse mythology, what is Thor the God of?",		
        answers: [  {text:"	Rain", correct: false},	
                    {text:"	Dancing", correct: false},	
                    {text:"	Thunder", correct: true},	
                ]},
    {question:"	Where is the Great Wall Located?",		
        answers: [  {text:"	China", correct: true},	
                    {text:"	South Korea", correct: false},	
                    {text:"	North Korea", correct: false},	
                ]},
    {question:"	Mr. Pibb was a soft drink created by the Coca-Cola Company to compete with what other soft drink?",		
        answers: [  {text:"	Cherry Cola", correct: false},	
                    {text:"	Dr. Pepper", correct: true},	
                    {text:"	Root beer", correct: false},	
                ]},
    {question:"	Who was married to John F. Kenedy and was first lady from 1961 until 1963?",		
        answers: [  {text:"	Michelle LaVaughn Robinson Kenedy"	, correct: false},	
                    {text:"	Eleanor Kenedy"	, correct: false},	
                    {text:"	Jacqueline Kennedy Onassis"	, correct: true},	
                ]},
    {question:"	What year did the Chernobyl disaster occur?",		
        answers: [  {text:"	1986", correct: true},	
                    {text:"	1984", correct: false},	
                    {text:"	1985", correct: false},	
                ]},
    {question:"	A Blue Whale has a heart roughly the size of a what?",		
        answers: [  {text:"	VW Beetle", correct: true},	
                    {text:"	Basketball", correct: false},	
                    {text:"	Grapefruit", correct: false},	
                ]},
    {question:"	Which country flag, nicknamed “The Maple Leaf’ consists of a red field with a white square and features a red maple leaf at its center?",		
        answers: [  {text:"	Turkey", correct: false},	
                    {text:"	Canada", correct: true},	
                    {text:"	Colombia", correct: false},	
                ]},
    {question:"	How would Groot answer this question?," ,	
        answers: [  {text:"	YO homie whats up!", correct: false},	
                    {text:"	I am groot", correct: true},	
                    {text:"	Groot I am young padawan"	, correct: false},	
                ]},
    {question:"	What did Aladdin steal in the marketplace at the beginning of “Aladdin”?",		
        answers: [  {text:"	Apple", correct: false},	
                    {text:"	Gold", correct: false},	
                    {text:"	Bread", correct: true},	
                ]},
    {question:"	What popular beverage once contained cocaine?",		
        answers: [  {text:"	Coca-Cola", correct: true},	
                    {text:"	Schweppes", correct: false},	
                    {text:"	Dr Pepper", correct: false},	
                ]},
    {question:"	Henry John Heinz founded a company specializing in the production of which food product?",		
        answers: [  {text:"	Mustard", correct: false},	
                    {text:"	Ketchup", correct: true},	
                    {text:"	Relish", correct: false},	
                ]},
    {question:"	What is the primary ingredient in guacamole?",		
        answers: [  {text:"	Tomato", correct: false},	
                    {text:"	Pineapple", correct: false},	
                    {text:"	Avocado", correct: true},	
                ]},
    {question:"	Which animal is, according to the New York times, by far the most expensive animal to keep in a zoo?",		
        answers: [  {text:"	Hippo", correct: false},	
                    {text:"	Elephant", correct: false},	
                    {text:"	Giant panda", correct: true},	
                ]},
    {question:"	Which is an Icelandic traditional dish?",		
        answers: [  {text:"	Sheep’s head", correct: true},	
                    {text:"	Rugbrød", correct: false},	
                    {text:"	Lutefisk", correct: false},	
                ]},
    {question:"	Which country does gouda cheese come from?",		
        answers: [  {text:"	Belgium", correct: false},	
                    {text:"	Switzerland", correct: false},	
                    {text:"	Netherlands", correct: true},	
                ]},  
    {question:"	Worldwide, what is the third most popular drink?",		
        answers: [  {text:"	Beer", correct: true},	
                    {text:"	Water", correct: false},	
                    {text:"	Coffee", correct: false},	
                ]},
    {question:"	What is Mickey Mouses dog called?",		
        answers: [  {text:"	Bruce", correct: false},	
                    {text:"	Jude", correct: false},	
                    {text:"	Pluto", correct: true},	
                ]},
    {question:"	What are Santa’s little helpers called?",		
        answers: [  {text:"	Gremlins", correct: false},	
                    {text:"	Elves", correct: true},	
                    {text:"	Little People", correct: false},	
                ]},
    {question:"	In the following which one food Giant Pandas normally eat?",		
        answers: [  {text:"	Bamboo", correct: true},	
                    {text:"	Corn", correct: false},	
                    {text:"	Fish", correct: false},	
                ]},
    {question:"	In the movie Finding Nemo, which country has Nemo been taken to?",		
        answers: [  {text:"	England", correct: false},	
                    {text:"	Australia", correct: true},	
                    {text:"	New Zealand", correct: false},	
                ]},
    {question:"	What type of animals pull Santa’s sleigh?",		
        answers: [ {text:"	Dogs", correct: false},	
                    {text:"	Horses", correct: false},	
                    {text:"	Reindeer", correct: true},	
                ]},
    {question:"	What color is the Grinch, who stole Christmas?",		
        answers: [  {text:"	Green", correct: true},	
                    {text:"	Blue", correct: false},	
                    {text:"	Brown", correct: false},	
                ]},
        
]


/**
 * Displays Name of Player on first page and last page, after having submitted a name
 */
function textWithName() {
    const inputBox = document.getElementById("input-name");
    const givenName = document.getElementById("name");
    const showName = document.getElementById("show-name");

    inputBox.addEventListener("input", displayName);
    function displayName(e) {
        showName.textContent(`Hello ${givenName}!`);
    }
}

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("button-answer");
const nextButton = document.getElementById("button-next");

let questionIndex = 0;
let score = 0;
let questionCount = 0;

function startGame() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

var questionNew = Math.floor(Math.random()*length.questions) + 1[questionIndex];

function showQuestion() {
    questionElement.innerHTML = questionNew.questions;

    questionNew.answers.forEach(answer => {
        const buttonAnswer = document.createElement("button-answer");
        buttonAnswer.textContent = answers.text;
        buttonAnswer.classList.add("button-answer");
        answerButton.appendChild(buttonAnswer);
        buttonAnswer.addEventListener ("click", selectAnswer);
        console.log(questionNew);
    });
} 


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer (e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
    } else {
            selectedButton.classList.add("incorrect");
        }
        buttonAnswer.disaabled =  true;
        nextButton.style.display = "block";
    }

function chooseLevel() {
    const buttonNovice = document.getElementById("btn-novice");
    const buttonExperienced = document.getElementById("btn-experienced");
    const buttonExpert = document.getElementById("btn-expert");

    if (buttonNovice){

    } else if (buttonExperienced){

    } else {
        buttonExpert
    }
}


