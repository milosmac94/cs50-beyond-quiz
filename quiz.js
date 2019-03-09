// Array of objects containing questions and answers
const questions = [{
        question: "What is 10 + 10?",
        options: ["8", "28", "30", "20"],
        answer: "20"
    },
    {
        question: "Who is the biggest cringelord in FDMM?",
        options: ["Slavisa", "Macura", "Todor", "Majar"],
        answer: "Majar"
    },
    {
        question: "Who won two Oscars in 2019?",
        options: ["Maharshala Ali", "Brad Cooper", "Chris Bale", "Your Mom"],
        answer: "Your Mom"
    },
    {
        question: "What is What?",
        options: ["What?", "But?", "What butt?", "Butt what?"],
        answer: "What?"
    },
    {
        question: "How many oinks in a boink?",
        options: ["Twelve", "Six", "Oinkteen", "Wtf"],
        answer: "Oinkteen"
    }
];

// Global variables
let questionNumber = 0;
let correct = 0;
let counter = 10;
const buttons = document.getElementsByClassName("option");
const startBtn = document.querySelector(".startBtn");

// Load question and options
function loadQuestion() {
    document.getElementById("question").innerHTML =
        questions[questionNumber].question;
    const options = document.getElementById("options");
    options.innerHTML = "";
    for (const option of questions[questionNumber].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }
}

// Update span element
function correctUpdate(first, second) {
    document.getElementById("correct-span").innerHTML = `${first} of ${second}`;
}

// Alert user that quiz iz complete
function quizComplete() {
    if (questionNumber == questions.length) {
        alert(`Correct: ${correct} of ${questions.length}`);
        resetGame();
    }
}

// Reset game when time up
function resetGame() {
    document.location.reload();
}

// Start game when button is pressed
startBtn.onclick = () => {
    if (startBtn.className === "startBtn") {
        setInterval(count, 1000);
        toggleButtons(false);
        startBtn.innerHTML = "Reset game";
        startBtn.className = "resetBtn";
    } else if (startBtn.className === "resetBtn") {
        resetGame();
    }
};

// Counter function
function count() {
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;
    if (counter == 0) {
        alert(`Time up! Correct: ${correct} of ${questions.length}`);
        resetGame();
    }
}

// Reset counter
function resetTimer() {
    counter = 10;
}

// Handle answer selection logic (correct / incorrect)
function selectAnswer() {
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach(e => {
        e.onclick = () => {
            if (e.innerHTML == questions[questionNumber].answer) {
                correct += 1;
                questionNumber += 1;
                correctUpdate(correct, questions.length);
                loadQuestion();
                resetTimer();
            } else {
                questionNumber += 1;
                correctUpdate(correct, questions.length);
                loadQuestion();
                resetTimer();
            }
            console.log(correct);
        };
    });
    quizComplete();
}

// Disable buttons if game is not started by user
function toggleButtons(state) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = state;
    }
}

// Load functions into DOM interactively
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    toggleButtons(true);
});

// Run timer
startBtn.addEventListener("click", () => {});

// Listen to clicks and run selectAnswer function when buttons are clicked
document.addEventListener("mousedown", (e) => {
    if (e.target.className === "option") {
        selectAnswer();
    }
});