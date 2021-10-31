class Board{
  constructor(row,column){
    this.row = row;
    this.column = column;
    this.grid = this.makeGrid();

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

  



}