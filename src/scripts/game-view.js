class View {
  constructor(el) {
    // this.game = game; 
    this.el = el; 
    this.setupBoard();
  }
}

View.prototype.setupBoard = function () {
  const ul = document.createElement("ul");
  for (let r = 0; r < 3; r++) {
    const div = document.createElement("div");
    for (let c = 0; c < 3; c++) {
      const li = document.createElement("li");
      li.id = `${r}_${c}`;
      li.innerHTML = "<img src='./src/scripts/grass.png'>";

      div.appendChild(li);
    }
    ul.appendChild(div);
  }
  this.el.appendChild(ul);
};

export default View;