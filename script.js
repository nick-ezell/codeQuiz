const startQuiz = {
    text: "In this quiz you will test your knowledge of basic coding information. You will have one minute, press the button to start.",
    button: "Start Quiz"
}
const questions = [
    question1 = {
        question: "Of the choices, which is not one of the three data types in JavaScript?",
        choices: ["Loops", "String", "Number", "Boolean"],
        answer: "Loops"
    },
    question2 = {
        question: "What does 'HTML' stand for?",
        choices: ["Hyper Text Making Language", "Href Type Model Listener", "Hyper Text Markup Language", "Happy Trex Make Loud"],
        answer: "Hyper Text Markup Language"
    },
    question3 = {
        question: "What does () indicate?",
        choices: ["String", "If statement", "Method", "Variable"],
        answer: "Method" 
    },
    question4 = {
        question: "What does 'DOM' stand for?",
        choices: ["Dragon Operated Missile", "Document Oriented Markup", "Data Object Model", "Document Object Model"],
        answer: "Document Object Model"
    }
]
let highScores = [];
let firstQ = questions[0];
let secondQ = questions[1];
let thirdQ = questions[2];
let fourthQ = questions[3];
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