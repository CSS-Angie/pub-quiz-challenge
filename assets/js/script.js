const question = [ 
    {question: "Who was the first disney character created by Walt Disney?" Image,
        answers: [  {text: "Mickey Mouse", correct: true},
                    {text: "Alladin", correct: false},
                    {text: "Donald Duck", correct: false},
            ]
    }
]


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

function showQuestion ( {
    let question = Math.floor(Math.random()*length.questions) + 1;
    let questionNew = question[questionIndex];
    questionElement.innerHTML = questionNew;
} console.log(questionNew);
)
function chooseLevel {
    if

    else if

    else
}






