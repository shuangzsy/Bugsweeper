const View = require("./scripts/game-view.js").default;


document.addEventListener("DOMContentLoaded", () => {
  // let game = new Game();

  const el = document.querySelector(".bugsweeper");
  let view = new View(el);
});