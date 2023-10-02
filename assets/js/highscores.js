var playerNameInput = document.getElementById("playerNameInput");
var scoreInput = document.getElementById("scoreInput");
var submitBtn = document.getElementById("submit-btn");
var highScoresList = document.getElementById("highscores-list");

var playerScores = JSON.parse(localStorage.getItem('playerScores')) || [];

function displayHighScores() {
  var playerName = playerNameInput.value;
  var playerScore = parseInt(scoreInput.value);
 
  for (var i = 0; i < playerScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = playerName + " " + playerScore;

    highScoresList.appendChild(listItem);
  }
}

displayHighScores();

submitBtn.addEventListener("click", function () {
  var playerName = playerNameInput.value;
  var playerScore = parseInt(scoreInput.value);

  if (playerName && !isNaN(playerScore)) {
    var playerData = { name: playerName, score: playerScore };
    playerScores.push(playerData);
    playerScores.sort(function (a, b) {
      return b.score - a.score;
    });

    if (playerScores.length > 5) {
      playerScores.pop();
    }

    localStorage.setItem('playerScores', JSON.stringify(playerScores));

    displayHighScores();
    
    highScoresList.innerHTML = '';

  for (var i = 0; i < playerScores.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = playerName + " " + playerScore;

      highScoresList.appendChild(listItem);
    }

    // displayHighscore();

    playerNameInput.value = " ";
    scoreInput.value = "";
  } else {
    alert("Please enter a valid name and score.");
  }
});

// var score = localStorage.getItem("score");
// var submitBtn = document.getElementById("submit-btn");
// // var leaderBoard = JSON.parse(localStorage.getItem("leaderboard")) || [];
// // var playerScores = document.getElementById("player-scores");
// // var highScoresContainer = document.getElementById("high-scores");
// var highScores = [];
// var maxPlayerScores = 3;
// var playerName = document.getElementById("player-name");
// var playerScore = document.getElementById("score-number");
// var newPlayerSection = document.getElementById("new-player-info");
// var nameSpan = document.getElementById("player1");
// var scoreSpan = document.getElementById("score1")

// renderLastPlayers();

// function renderLastPlayers() {
//   var player = localStorage.getItem("player-name");
//   var playerScore = localStorage.getItem("score-number");

//   if (!playerName || !playerScore) {
//     return;
//   }

// nameSpan.textContent = name;
// scoreSpan.textContent = score;

// console.log(playerName);
// console.log(playerScore);
// }

// function displayHighScores() {
//   playerScores.innerHTML = " ";

//   for (var i = 0; i < highScores.length; i++) {
//     var listItem = document.createElement("li");
//     listItem.textContent = highScores[i].initials + ": " + highScores[i].score;
//     playerScores.appendChild(listItem);
//   }

//   var userInitials = prompt("Enter your initials to join the leaderboard");

//       highScores.push({ initials: userInitials, score: score});
//       displayHighScores();
// }

// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   var userScore = {
//     name: name.value,
//     score: score.valueOf(),
//   };

//   localStorage.setItem("userScore", JSON.stringify(userScore));
//   renderMessage();
// });

// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   submitBtn.log(obj);

//   leaderBoard.push(obj);
//   console.log(leaderBoard);

//   localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));

//   for (i = 0; i < leaderBoard.length; i++) {
//     var li = document.createElement("li")
//     li.textContent = "player: " + leaderBoard[i].initials + "Score: " + leaderBoard[i].score

//     scoreList.appendChild(li);
//   }
// });

// var userScore = []
// var userInitials = {
//   initials: initials.value,
//   score: userScore.value
// }
// userScore.push(player);
