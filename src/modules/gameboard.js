"use strict";

class Gameboard {
  constructor(player) {
    this.board = [];
    this.difficulty = player.difficulty;
  }

  createGameboard() {
    let rows;
    let cols;

    if (this.difficulty === "beginner") {
      rows = 8;
      cols = 8;
    } else if (this.difficulty === "intermediate") {
      rows = 16;
      cols = 16;
    } else if (this.difficulty === "advanced") {
      rows = 16;
      cols = 30;
    }

    for (let x = 0; x < rows; x++) {
      let innerArray = [];
      for (let y = 0; y < cols; y++) {
        const tile = {
          x,
          y,
          mine: false,
          hidden: true,
          adjacentMines: 0,
        }
        innerArray.push(tile);
      }
      this.board.push(innerArray);
    }
  }

  placeMines() {
    let z;
    let rows;
    let cols;

    if (this.difficulty === "beginner") {
      z = 10;
      rows = 8;
      cols = 8;
    } else if (this.difficulty === "intermediate") {
      z = 40;
      rows = 16;
      cols = 16;
    } else if (this.difficulty === "advanced") {
      z = 99;
      rows = 16;
      cols = 30;
    }


    for (let i = 0; i < z; i++) {
      let x = parseInt(Math.random() * rows);
      let y = parseInt(Math.random() * cols);

      if (this.board[x][y].mine === false) {
        this.board[x][y].mine = true;
      } else if (this.board[x][y].mine === true) {
        // Look for a spot that doesn't have a mine
        let found = false;
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if (this.board[row][col].mine !== true) {
              this.board[row][col].mine = true;
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
  
  countAdjacentMines(row, col) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        // Überprüfe, ob die Position im Spielfeld liegt
        if (i >= 0 && i < this.board.length && j >= 0 && j < this.board[i].length) {
          // Überprüfe, ob das Feld eine Mine ist
          if (this.board[i][j].mine === true && !(i === row && j === col)) {
            count++;
          }
        }
      }
    }
    return count;
  }

  calculateAdjacentMines() {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        // Überprüfe, ob das Feld eine Mine ist; wenn ja, überspringe es
        if (this.board[row][col].adjacentMines !== true) {
          // Berechne die Anzahl der benachbarten Minen für das aktuelle Feld
          let adjacentMines = this.countAdjacentMines(row, col);
          // Weise die berechnete Anzahl der benachbarten Minen dem Feld zu
          this.board[row][col].adjacentMines = adjacentMines;
        }
      }
    }
  }
  
}

export { Gameboard };
