const startQuiz = {
    text: "In this quiz you will test your knowledge of basic coding information. You will have one minute, press the button to start.",
    button: "Start Quiz"
}
const questions = {
    question1: {
        question: "Of the choices, which is not one of the three data types in JavaScript?",
        correct: "Loops",
        choice2: "String",
        choice3: "Number",
        choice4: "Boolean"
    },
    question2: {
        question: "What does 'HTML' stand for?",
        choice1: "Hyper Text Making Language", 
        choice2: "Href Type Model Listener",
        correct: "Hyper Text Markup Language", 
        choice4: "Happy Trex Make Loud"
    },
    question3: {
        question: "What does () indicate?",
        choice1: "String",
        choice2: "If statement", 
        correct: "Method",
        choice4: "Variable"
    },
    question4: {
        question: "What does 'DOM' stand for?",
        choice1: "Dragon Operated Missile",
        choice2: "Document Oriented Markup", 
        choice3: "Data Object Model",
        correct: "Document Object Model"
    }
}
let highScores = [];
let firstQ = questions.question1;
let secondQ = questions.question2;
let thirdQ = questions.question3;
let fourthQ = questions.question4;
let container = document.querySelector(".container");
let qText = document.querySelector("#text");
let result = document.querySelector("#result");
let timeLeft = document.querySelector("#timeLeft");
let counter = 60;
function setTime() {
    var timerInterval = setInterval(function() {
      counter--;
      timeLeft.textContent = counter;
      if(counter===0){
          clearInterval(timerInterval);
      }
    }, 1000);
  }
  window.addEventListener("load", function start(){
    var startText = startQuiz.text;
    var startBtn = startQuiz.button;
    qText.textContent = startText;
    var br = document.createElement("br");
    qText.appendChild(br);
    var button = document.createElement("button");
    button.textContent = startBtn;
    qText.appendChild(button);
    button.addEventListener("click", setTime);
    button.addEventListener("click", nextQ)
  })