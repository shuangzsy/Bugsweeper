class Board{
  constructor(row,column){
    this.row = row;
    this.column = column;
    this.grid = this.makeGrid();
    this.hiddenMarks();
  }

  makeGrid() {
  const grid = [];

  for (let i = 0; i < this.row; i++) {
    grid.push([]);
    for (let j = 0; j < this.column; j++) {
      grid[i].push(null);
    }
  }
  return grid;
  }

  isValidPos(pos) {
    return (0 <= pos[0]) &&
      (pos[0] < this.row) &&
      (0 <= pos[1]) &&
      (pos[1] < this.column);
  }

  isEmptyPos(pos) {
    if (!isValidPos(pos)) {
      throw new MoveError('Is not valid position!');
    }
    return (this.grid[pos[0]][pos[1]] === null);
  }

  hiddenMarks(){
    let blockNum = this.row * this.column;
    let foodNum = Math.floor(blockNum / 2) + 1;
    let bugNum = blockNum - foodNum;
    // console.log(bugNum);
    let bugList = [];
    while (bugList.length < bugNum)
    {let randomPos = Math.floor(Math.random() * blockNum);
      let randomX = Math.floor(randomPos / this.row);
      let randomY = randomPos % this.row;
      if (!bugList.includes(randomPos)){
        this.grid[randomX][randomY] = "X";
        bugList.push(randomPos)
      }
    }
    for (let i = 0; i < this.row; i++){
      for (let j = 0; j < this.column; j++){
        if (!this.grid[i][j]){
          this.grid[i][j] = "O"
        }
      }
    }
  }
}

export default Board;