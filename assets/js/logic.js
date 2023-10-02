//To do:

// Have timer count down triggered by click event on start button

// Have the first question and answer choices displayed/triggered by same click even on start button

// When answer is chosen, have it trigger displaying the result below answer box along with a Next button pop up to move on to next question

// When Next button is clicked have it trigger the 2nd question to pop up and have timer restart with same click event

// Repeat process for 3rd question

// Once all 3 questions are answered have questions hidden and display "GAME OVER"

// Or!!

// If timer runs out before a question is answered, have question hidden and display "Time's Up -- You lost!"

var timeSpan = document.getElementById("time-left");
var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");

var timeLeft = questions.length * 10;
var currentQuestionIndex = 0;
var score = 0;
// var isFlashing = false; //would like to add this to make timer blink when time is deducted for answering question but can't get it to work

function displayTime() {
  timeSpan.textContent = timeLeft;
}

//get questions and answers to display here

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    var currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = " ";

    var questionText = document.createElement("h2");
    questionText.textContent = currentQuestion.question;
    questionContainer.appendChild(questionText); //link the actual question to pop up in it's header in the question container

    var choiceContainer = document.createElement("section");
    choiceContainer.className = "choice-container"; //created a class for the choices so i could style them with css the way that i wanted

    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choice = document.createElement("button");
      choice.id = "choice-buttons";
      choice.textContent = currentQuestion.choices[i];

      choice.addEventListener("click", function () {
        if (this.textContent === currentQuestion.answer) {
          score += 100; //made each question worth 100points

          var correctAnswer = document.createElement("h3");
          correctAnswer.id = "result-good";
          correctAnswer.textContent = "Good job!";

          this.parentElement.appendChild(correctAnswer);
        } else {
          var wrongAnswer = document.createElement("h4");
          wrongAnswer.id = "result-wrong";
          wrongAnswer.textContent = "Wrong!!";
          this.parentElement.appendChild(wrongAnswer);
          timeLeft -= 10;
        }

        currentQuestionIndex++;
        setTimeout(function () {
          displayQuestion();
        }, 1200);
      });

      choiceContainer.appendChild(choice);
    }
    questionContainer.appendChild(choiceContainer); //link the questions and the choices
  }
}

// get timer to begin count down when start button is clicked
startBtn.addEventListener('click', function (event) {
  event.preventDefault();
  startBtn.disabled = true;
  score = 0;

  displayTime();
  displayQuestion();

  var timeInterval = setInterval(function () {
    if (currentQuestionIndex >= questions.length) {// Check if all questions are answered
      clearInterval(timeInterval); // Stop the timer
      questionContainer.innerHTML =
        "Your score = " + score + " out of " + (questions.length * 100);
        setTimeout(function (){
          window.location.href = "highscores.html";
        }, 3000);
    } else if (timeLeft <= 0) {
      clearInterval(timeInterval);
      questionContainer.innerHTML = "Time's Up! Your score = " + score + " out of " + (questions.length * 100);
      setTimeout(function (){
        window.location.href = "highscores.html";
      }, 3000);
    } else {
      timeLeft--;
      displayTime();
    }
  }, 1000);
});

// function getScore() {
//   var scoreTotal = localStorage.getItem("score");
// }
// getScore();

// function displayHighscore () {
//   window.location.href = "highscore.html";
// }

// localStorage.setItem("score", timeLeft);

// var userScore = []
// var userInitials = {
//   initials: initials.value,
//   score: userScore.value
// }
// userScore.push(player);

// function displayHighScores() {
//   playerScores.innerHTML = " ";
  
//   var 

//   for (var i = 0; i < highScores.length; i++) {
//     var listItem = document.createElement("li");
//     listItem.textContent = highScores[i].initials + ": " + highScores[i].score;
//     playerScores.appendChild(listItem);
//   }

//   var userInitials = prompt("Enter your initials to join the leaderboard");

//       highScores.push({ initials: userInitials, score: score});
//       displayHighScores();
// }

// console.log(displayHighScores);