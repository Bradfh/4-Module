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

function startGame() {
  if (mode === "noQuiz") {
    mode === "yesQuiz";
    startArea.setAttribute("style", "display:none");
    quizArea.setAttribute("style", "display:block");
  } else {
    mode === "noQuiz";
    quizArea.setAttribute("style", "display:none");
    startArea.setAttribute("style", "display:block");
  }
}

