"use strict";

class Gameboard {
  constructor(player) {
    this.board = [];
    this.difficulty = player.difficulty;
  }

  checkDifficulty() { }

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
      } else if (this.board[x][y] == "x") {
        // Look for a spot that doesn't have an "x"
        let found = false;
        for (let row = 0; row < 8; row++) {
          for (let col = 0; col < 8; col++) {
            if (this.board[row][col] !== "x") {
              this.board[row][col] = "x";
              found = true;
              break;
            }
          }
          if (found) {
            break;
          }
        }
      }
    }
  }
}

export { Gameboard };
