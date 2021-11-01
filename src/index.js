const View = require("./scripts/game-view.js").default;
const Game = require("./scripts/game.js");


document.addEventListener("DOMContentLoaded", () => {
  let rowNum = 3;
  let colNum = 3;
  let game = new Game(rowNum,colNum);

  const el = document.querySelector(".bugsweeper");
  let view = new View(el, game);

});