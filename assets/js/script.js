// Clicking the button will start the game
// A new question and list of choices will replace the welcome screen and instruction.  is it hidden?
// When a question is answered the correct answer will display a check mark and an incorrect answer will display an X.
// When a question is answered the next question and answers will appear
// When a question is answered incorrectly 10 seconds will be removed from the clock
//When the quiz is over your score will be displayed.  The score will simply be a value equal to the remaining time
// Along with the score a submit box will appear to enter your name or initials.  This will be stored in local data
// A button to try again will be displayed beneath the score screen
// A button to view high scores will be displayed on the top of the screen
// Clicking this button will display a list of high scores, taken from local storage, with an option beneath to clear scores (storage).


//Start Game Function - change the h1 to question? hide p?  create ul and append children as choices?

let startArea = document.querySelector(".quiz-area");
let quizArea = document.querySelector(".quiz-hidden");
let buttonSelect = document.querySelector("#button-start");
let mode = "noQuiz";
let timerElement = document.getElementById('timer');
let secondsLeft = 5;

function startGame() {
  if (mode === "noQuiz") {
    mode === "yesQuiz";
    startArea.setAttribute("style", "display:none");
    quizArea.setAttribute("style", "display:block");
    setTime();
  } else {
    mode === "noQuiz";
    quizArea.setAttribute("style", "display:none");
    startArea.setAttribute("style", "display:block");
  }
}

function setTime () {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft;
    showQuestion();
    if (secondsLeft <= 0) {
      alert('Out of Time!');
      timerElement.textContent = '0';
      clearInterval(timerInterval);
      showScores()
      
    } 
    
  }, 1000);
}

// Question object array with embedded answer object arrays:

const questions = [
  {
    question: 'Who colonized Tunisia in ancient times?',
    answers: [
      { choice: "Phoenicians", correct: true },
      { choice: "Pyrgamese", correct: false },
      { choice: "Philistines", correct: false },
      { choice: "Palmyrans", correct: false },
    ],
  },
  {
    question: 'What was the eastern half of the Roman Empire called?',
    answers: [
      { choice: "Gaza Empire", correct: false },
      { choice: "Byzantine Empire", correct: true },
      { choice: "Akkadian Empire", correct: false },
      { choice: "Eastern Empire", correct: false },
    ],
  }, {
    question: 'Where is Hadrian"s Wall located?',
    answers: [
      { choice: "Turkey", correct: false },
      { choice: "Armenia", correct: false },
      { choice: "Italy", correct: false },
      { choice: "England", correct: true },
    ],
  }, {
    question: 'What was the name of Alexander the Great"s famous horse?',
    answers: [
      { choice: "Hermes", correct: false },
      { choice: "Bucephalaus", correct: true },
      { choice: "Pegasus", correct: false },
      { choice: "Orion", correct: false },
    ],
  },
  {
    question: 'Who sacked Rome for the final time?',
    answers: [
      { choice: "The Visigoths", correct: true },
      { choice: "The Germanic Tribes", correct: false },
      { choice: "Carthage", correct: false },
      { choice: "The Byzantine Empire", correct: false },
    ],
  }
]

// function for populating the HTML.  Using createElement
// need to queryselect a bunch of things from the HTML.  choice-btn

const answerArea = document.getElementById('choices');
const questionArea = document.getElementById('inquiry');  // Note to self: these 2 const define where I will be making the JS do things.
let currentQuestion = 0;

// This is making the innerHTML >< state the question element based on which question index we are on within the questions array.
function showQuestion() {
  questionArea.innerHTML = '';
  questionArea.innerHTML = questions[currentQuestion].question;

  answerArea.innerHTML = ''; // Answer area reset
  for (let i = 0; i < questions[currentQuestion].answers.length; i ++) { //this should make an individual button for each answer
    let answer = questions[currentQuestion].answers[i];
    let button = document.createElement('button');
    button.className = 'choice-btn';
    button.innerHTML = answer.choice;
    answerArea.appendChild(button);
    button.addEventListener('click', function() {  //because the answers were given Boolean elements this works
      if (answer.correct) {
        currentQuestion++;
      } else {
        currentQuestion++;
        secondsLeft -= 10;
        document.getElementById('timer').innerHtml='00:' + secondsLeft;
        timerElement.classList.add('wrong-answer');
          setTimeout(() => {
            timerElement.classList.remove('wrong-answer');
      }, 500);
      }

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showScores();
      }
    }
    )};
    
}

function showScores() {
  questionArea.innerHTML = '';
  questionArea.innerHTML = 'Thanks for playing!  Enter your name for posterity!'
}