const View = require("./game-view").default;

class Timer{
  constructor(timeLeft, view){
    this.timeLeft = timeLeft;
    this.start();
    this.view = view;
  }

  start() {
    this.timer = setInterval(this.updateTimer.bind(this), 1000);
    this.updateTimer.bind(this)();
  }

  updateTimer() {
    this.timeLeft = this.timeLeft - 1;
    if (this.timeLeft >= 0)
      {
      const timeElement = document.getElementById('timer');
      timeElement.innerHTML = this.timeLeft;}
    else {
      this.gameOver();
      const failtext = document.getElementById('fail-text');
      failtext.innerHTML = "Time's Up!"
      this.view.showFailscreen();
    }
  }

  gameOver() {
    // This cancels the setInterval
    clearInterval(this.timer);}

}


module.exports = Timer;

