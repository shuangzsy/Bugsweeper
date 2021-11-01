const View = require("./scripts/game-view.js").default;
const Game = require("./scripts/game.js");


  window.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("start-game");
    const resetButton = document.getElementById("play-again");
    const resetButton2 = document.getElementById("play-again-2");

    let rowNum = 4;
    let colNum = 3;
    const el = document.querySelector(".bugsweeper");
    
    
    startButton.addEventListener("click", () => {
      el.innerHTML = "";
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
      startButton.style.display = 'none';
    });

    resetButton.addEventListener("click", () => {
      const winWindow = document.querySelector(".win-container");
      winWindow.style.display = 'none';
      el.innerHTML = "";
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
    });

    resetButton2.addEventListener("click", () => {
      const failWindow = document.querySelector(".fail-container");
      failWindow.style.display = 'none';
      el.innerHTML = "";
      let game = new Game(rowNum, colNum);
      let view = new View(el, game);
    });
  });



