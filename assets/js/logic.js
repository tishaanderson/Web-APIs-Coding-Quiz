var timeSpan = document.getElementById("time-left");
var startBtn = document.getElementById("start-btn");

var timeLeft = questions.length * 60;

function displayTime() {
  timeSpan.textContent = timeLeft;
}

startBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var timeInterval = setInterval(
    function () {
      displayTime();
      timeLeft--;

    }, 1000
  )

})