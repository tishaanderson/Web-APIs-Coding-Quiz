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

var timeLeft = questions.length * 5;
var currentQuestionIndex = 0;
var score = 0;

console.log(questions);
console.log(currentQuestionIndex);

function displayTime() {
  timeSpan.textContent = timeLeft;
}

console.log(timeLeft);
console.log(displayTime);

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {

    var currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = " "; 
    
    var questionText = document.createElement("h2");
    questionText.textContent = currentQuestion.question;
    questionContainer.appendChild(questionText);

    var choiceContainer = document.createElement("section");
    choiceContainer.className = "choice-container";

    for (var i = 0; i < currentQuestion.choices.length; i++) {

      var choice = document.createElement("button");
      choice.id = "choice-buttons";
      choice.textContent = currentQuestion.choices[i];

      choice.addEventListener('click', function () {

        currentQuestionIndex++;
        displayQuestion();
      });
      choiceContainer.appendChild(choice);
    }
    questionContainer.appendChild(choiceContainer);
  } else {
    questionContainer.innerHTML = "Congrats! You finished the quiz!! Your score = " + score + " out of " + questions.length;
  }
  
}
startBtn.addEventListener('click', function (event) {
  event.preventDefault();

  displayTime();
  displayQuestion();

  var timeInterval = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      alert("Time's Up -- You Lost! :( ");
    } else {
      timeLeft--;
      displayTime();
    }
  }, 1000);
});