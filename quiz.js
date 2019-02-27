// Array of objects containing questions and answers
const questions = [
  {
    question: "What is 10 + 10?",
    options: ["8", "28", "30", "20"],
    answer: "20"
  },
  {
    question: "Who is the biggest cringelord in FDMM?",
    options: ["Slavisa", "Macura", "Todor", "Majar"],
    answer: "20"
  }
];

// Counters for looping through questions and counting correct answers
let questionNumber = 0;
let correct = 0;

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

// Handle answer selection logic (correct / incorrect) --TO DO
function selectAnswer() {
  const buttons = document.getElementsByClassName("option");
  const buttonsArray = Array.from(buttons);
  buttonsArray.forEach(e => {
    e.onclick = () => {
      if (e.innerHTML == questions[questionNumber].answer) {
        correct += 1;
        alert(correct);
      } else {
        alert("False");
      }
    };
  });
}

// Load functions into DOM interactively
document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
  selectAnswer();
});
