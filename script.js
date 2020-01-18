const startQuiz = {
  text: "In this quiz you will test your knowledge of basic coding information. You will have one minute, press the button to start.",
  button: "Start Quiz"
}

const questions = [
  {
    question: "Of the choices, which is not one of the three data types in JavaScript?",
    choices: [
      "Loops",
      "String",
      "Number",
      "Boolean"
    ],
    answer: "Loops"
  },
  {
    question: "What does 'HTML' stand for?",
    choices: [
      "Hyper Text Making Language",
      "Href Type Model Listener",
      "Hyper Text Markup Language",
      "Happy Trex Make Loud"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does () indicate?",
    choices: [
      "String",
      "If statement",
      "Method",
      "Variable"
    ],
    answer: "Method"
  },
  {
    question: "What does 'DOM' stand for?",
    choices: [
      "Dragon Operated Missile",
      "Document Oriented Markup",
      "Data Object Model",
      "Document Object Model"
    ],
    answer: "Document Object Model"
  }
]

let firstQ = questions[0];
let secondQ = questions[1];
let thirdQ = questions[2];
let fourthQ = questions[3];

let highScores = [];

let qText = document.querySelector("#text");
let result = document.querySelector("#result");
let startText = startQuiz.text;
let startBtn = startQuiz.button;
//Writing our start page to screen
window.addEventListener("DOMContentLoaded", function(){qText.textContent = startText;
let br = document.createElement("br");
qText.appendChild(br);

button = document.createElement("button");
button.textContent = startBtn;
qText.appendChild(button);
button.addEventListener("click", startQuizAlready);
});

//Function to navigate from start page and to start countdown
function startQuizAlready() {
  display(firstQ)
}
//Function to set time
let timeLeft = document.querySelector("#timeLeft");
let counter = 45;
function setTime() {
  timerInterval = setInterval(function () {
    counter--;
    timeLeft.textContent = counter;
    if (counter === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//Function that clears the text generated by validateAnswer
function validateTimer() {
  let resultTime = 1;
  let resultInterval = setInterval(function () {
    resultTime--;
    if (resultTime === 0) {
      clearInterval(resultInterval)
      result.textContent = "";
    }
  }, 500);
}
//Function to validate answer choice
function validateAnswer() {
  let choice = event.target

  if (choice.innerHTML === firstQ.answer) {
    result.textContent = "Correct!"
    validateTimer();
    display(secondQ);
  }
  if (choice.innerHTML === secondQ.answer) {
    result.textContent = "Correct!"
    validateTimer();
    display(thirdQ);
  }
  if (choice.innerHTML === thirdQ.answer) {
    result.textContent = "Correct!"
    validateTimer();
    display(fourthQ);
  }
  if (choice.innerHTML === fourthQ.answer) {
    result.textContent = "Correct!"
    validateTimer();
    toHighScores();
  }
}
//Function to call our validate function
function callValidateAnswer() {
  validateAnswer()
}
//Function to display current question on page
function display(props) {

  if (props.question === firstQ.question) {
    qText.textContent = props.question
    let br = document.createElement("br");
    qText.appendChild(br);
    for (i = 0; i < props.choices.length; i++) {
      button = document.createElement("button");
      button.textContent = props.choices[i]
      qText.appendChild(button)
      button.addEventListener('click', callValidateAnswer)
    }
    setTime();
  }

  if (props.question === secondQ.question) {
    qText.textContent = props.question
    let br = document.createElement("br");
    qText.appendChild(br);
    for (i = 0; i < props.choices.length; i++) {
      button = document.createElement("button");
      button.textContent = props.choices[i]
      qText.appendChild(button)
      button.addEventListener('click', callValidateAnswer)
    }
  }
  if (props.question === thirdQ.question) {
    qText.textContent = props.question
    let br = document.createElement("br");
    qText.appendChild(br);
    for (i = 0; i < props.choices.length; i++) {
      button = document.createElement("button");
      button.textContent = props.choices[i]
      qText.appendChild(button)
      button.addEventListener('click', callValidateAnswer)
    }
  }
  if (props.question === fourthQ.question) {
    qText.textContent = props.question
    let br = document.createElement("br");
    qText.appendChild(br);
    for (i = 0; i < props.choices.length; i++) {
      button = document.createElement("button");
      button.textContent = props.choices[i]
      qText.appendChild(button)
      button.addEventListener('click', callValidateAnswer)
    }
  }
};
function toHighScores(){
  clearInterval(timerInterval)
  let score = timeLeft;
  qText.textContent = "";
  qText.removeChild(button)
  
}