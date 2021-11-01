class View {
  constructor(el, game) {
    this.game = game; 
    this.grid = this.game.grid;
    this.el = el; 
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const ul = document.querySelector("ul");
    ul.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e){
    let square = e.target;
    this.showResult(square);
  }

  showResult(square){
    console.log(square.id[0]);
    let row = parseInt(square.id[0]);
    
    let col = parseInt(square.id[2]);
    console.log(col);
    const msg = document.createElement("h2")
    console.log(this.grid[row][col]);

    if (this.grid[row][col] === "X"){
      square.innerHTML = "<img src='./src/scripts/bug.png'>";
      msg.innerHTML = 'You hit a bug, game is over!'
    } else if (this.grid[row][col] === "O"){
      let bugNear = this.game.bugNum([row, col]);
      console.log(bugNear);
      square.innerHTML = "<img src='./src/scripts/meat.png'>";
      msg.innerHTML = 'Wow, meat!'
      setTimeout(() => { square.innerHTML = bugNear }, 1000);
    }
    document.querySelector("body").appendChild(msg);
  }

}

View.prototype.setupBoard = function () {
  let rowL = this.grid.length;
  let colL = this.grid[0].length;
  const ul = document.createElement("ul");
  for (let r = 0; r < rowL; r++) {
    const div = document.createElement("div");
    for (let c = 0; c < colL; c++) {
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