class Timer{
  constructor(time){
    this.timeElapsed = 0;
    this.timeLeft = time;
    this.time = time;
    this.timeElement = document.getElementById('timer');
    // this.view = view;
    this.updateTimer = this.updateTimer.bind(this);
  }

  start(cb) {
    this.timer = setInterval(() => {
      this.updateTimer(cb)
    }, 1000);
    this.printTime()
  }

  printTime(){
    this.timeElement.innerHTML = this.timeLeft;
  }


  updateTimer(cb) {
    this.timeLeft = this.time - ++this.timeElapsed 
    console.log(this.timeLeft)
    if (this.timeLeft >= 0){
      this.printTime();
    }else {
      this.reset();
      cb();
      // const failtext = document.getElementById('fail-text');
      // failtext.innerHTML = "Game Over!!"
      // this.view.showFailscreen();
    }
  }

  reset() {
    // This cancels the setInterval
    clearInterval(this.timer);
    this.timeLeft = this.time;
    this.timeElapsed = 0;
  }
}


module.exports = Timer;

