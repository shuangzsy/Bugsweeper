const View = require("./scripts/game-view.js").default;
const Game = require("./scripts/game.js");
const Timer = require("./scripts/timer");
const Butterfly = require("./scripts/butterfly").default;

  window.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("start-game");
    const resetButton = document.getElementById("play-again");
    const resetButton2 = document.getElementById("play-again-2");
    const timeElement = document.getElementById('timer');
    const resultButton = document.getElementById('result');
    const resultShow = document.getElementById('result-show');
    

    let rowNum = 5;
    let colNum = 5;
    let timer = new Timer(99);
    const el = document.querySelector(".bugsweeper");

    
    startButton.addEventListener("click", () => {

      el.innerHTML = "";
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      startButton.style.display = 'none';

      //timer
      timer.start(
        () => {
          const failtext = document.getElementById('fail-text');
          failtext.innerHTML = "Game Over!!"
          view.showFailscreen();
        }
      );
      // if (timeElement.innerHTML === "1"){
      //   const failtext = document.getElementById('fail-text');
      //   failtext.innerHTML = "Game Over!!"
      //   this.view.showFailscreen();
      // }


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
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        if ( x < butterfly.x + 20 && x > butterfly.x -20){
          const timePlus = document.getElementById("time-plus");
          timePlus.style.display = 'flex';
          timer.timeLeft += 10;
          }
        }, false);

      //result button
      // resultButton.addEventListener("click", () => {
      //   resultShow.innerHTML = view.grid;
      // });

    });

    resetButton.addEventListener("click", () => {
      const winWindow = document.querySelector(".win-container");
      winWindow.style.display = 'none';
      const failWindow = document.querySelector(".fail-container");
      failWindow.style.display = 'none';
      el.innerHTML = "";
 
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      timer.reset();
      timer.start();

      //result button
      // resultButton.addEventListener("click", () => {
      //   resultShow.innerHTML = view.grid;
      // });
    });

    resetButton2.addEventListener("click", () => {
      const failWindow = document.querySelector(".fail-container");
      failWindow.style.display = 'none';
      el.innerHTML = "";

      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      timer.reset();
      timer.start();


      // //result button
      // resultButton.addEventListener("click", () => {
      //   resultShow.innerHTML = view.grid;
      // });
    });

  });






