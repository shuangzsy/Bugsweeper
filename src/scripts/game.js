const Board = require("./board").default;

class Game {
  constructor(r, c) {
    this.board = new Board(r, c);
    this.grid = this.board.grid;
  }

  bugNum(pos) {
    let x = pos[0];
    let y = pos[1];
    let checkDir = [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1]];
    let bugCount = 0;
    for (let i = 0; i < checkDir.length; i++){
      if (this.board.isValidPos(checkDir[i])){
        let validX = checkDir[i][0];
        let validY = checkDir[i][1];
        if (this.grid[validX][validY] == "X"){
          bugCount += 1
        }
      }
    }
    return bugCount
  }
  
}

module.exports = Game;

// const  g = new Game(3,3);
// console.log(g.board.grid)