"use strict";

class Gameboard {
  constructor(player) {
    this.board = [];
    this.difficulty = player.difficulty;
  }

  checkDifficulty() {}

  createGameboard() {
    let z = 8;

    for (let i = 0; i < z; i++) {
      let innerArray = [];
      this.board.push(innerArray);
      for (let j = 0; j < z; j++) {
        innerArray.push(0);
      }
    }
  }

  placeMines() {
    let z = 10;
    for (let i = 0; i < z; i++) {
      let x = parseInt(Math.random() * 8);
      let y = parseInt(Math.random() * 8);

      if (this.board[x][y] == 0) {
        this.board[x][y] = "x";
      }
    }
  }
}

export { Gameboard };
