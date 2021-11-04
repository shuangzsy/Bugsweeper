const View = require("./scripts/game-view.js").default;
const Game = require("./scripts/game.js");
const Timer = require("./scripts/timer");
const Butterfly = require("./scripts/butterfly").default;

  window.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("start-game");
    const resetButton = document.getElementById("play-again");
    const resetButton2 = document.getElementById("play-again-2");
    const timeElement = document.getElementById('timer');

    let rowNum = 5;
    let colNum = 6;
    let timer;
    let timer2;
    let timer3;
    const el = document.querySelector(".bugsweeper");

    
    startButton.addEventListener("click", () => {
      el.innerHTML = "";
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      timer = new Timer(120, view);
      startButton.style.display = 'none';

      // for audio
      const audio = document.querySelector("audio");
      audio.volume = 0.2;
      audio.loop;
      audio.play();
      audio.muted = false;

      //canvase element
      let canvas = document.getElementById('canvas');
      canvas.style.display = 'flex';
      let butterfly;
      let butterflyTimer = setInterval(function () { butterfly = new Butterfly(canvas, 10, 10); }, 10000);

      canvas.addEventListener('click', function (event) {
        console.log(butterfly.x)
        console.log(canvas.width);
        console.log(canvas.height);
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        console.log("x: " + x + " y: " + y);
        if ( x < butterfly.x + 20 && x > butterfly.x -20){
          const timePlus = document.getElementById("time-plus");
          timePlus.style.display = 'flex';
          timer.timeLeft += 10;
        }
      }, false);
      
    });

    resetButton.addEventListener("click", () => {
      const winWindow = document.querySelector(".win-container");
      winWindow.style.display = 'none';
      const failWindow = document.querySelector(".fail-container");
      failWindow.style.display = 'none';
      el.innerHTML = "";
      // timer.timeLeft = 0;
 
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      timer2 = new Timer(120, view);
    });

    resetButton2.addEventListener("click", () => {
      const failWindow = document.querySelector(".fail-container");
      failWindow.style.display = 'none';
      el.innerHTML = "";
      timer.timeLeft = 0;

      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      timer3 = new Timer(120, view);
    });






  });






