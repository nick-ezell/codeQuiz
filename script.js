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
var startText = startQuiz.text;
var startBtn = startQuiz.button;
//Writing our start page to screen
qText.textContent = startText;
let br = document.createElement("br");
qText.appendChild(br);

let button = document.createElement("button");
button.textContent = startBtn;
qText.appendChild(button);
button.addEventListener("click", startQuizAlready);
//Function to navigate from start page and to start countdown
function startQuizAlready() {
  display(firstQ)
}
//Function to validate answer choice
function validateAnswer() {
  let choice = event.target

  if (choice.innerHTML === firstQ.answer) {
    result.textContent = "Correct!"
  }
  else {
    result.textContent = "Wrong!"
  }

  if (choice.innerHTML === secondQ.answer) {
  }
}
//Function to call our validate function
function callValidateAnswer() {
  validateAnswer()
  display(secondQ)
}
//Function to display current question on page
function display(props) {

  if (props.question === firstQ.question) {
    qText.textContent = props.question
    let br = document.createElement("br");
    qText.appendChild(br);
    for (i = 0; i < props.choices.length; i++) {
      let button = document.createElement("button");
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
      let button = document.createElement("button");
      button.textContent = props.choices[i]
      qText.appendChild(button)
      button.addEventListener('click', callValidateAnswer)
    }
  }
};

let timeLeft = document.querySelector("#timeLeft");
let counter = 60;
//Function to set time
function setTime() {
  var timerInterval = setInterval(function () {
    counter--;
    timeLeft.textContent = counter;
    if (counter === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}