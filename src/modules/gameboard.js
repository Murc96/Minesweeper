"use strict";
import { createTileDivs } from "./functions";

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
          marked: false,
        }
        innerArray.push(tile);
      }
      this.board.push(innerArray);
    }
  }

  placeMines() {
    let mines;
    let rows;
    let cols;

    if (this.difficulty === "beginner") {
      mines = 10;
      rows = 8;
      cols = 8;
    } else if (this.difficulty === "intermediate") {
      mines = 40;
      rows = 16;
      cols = 16;
    } else if (this.difficulty === "advanced") {
      mines = 99;
      rows = 16;
      cols = 30;
    }


    for (let i = 0; i < mines; i++) {
      let x = parseInt(Math.random() * rows);
      let y = parseInt(Math.random() * cols);

      if (this.board[x][y].mine === false) {
        this.board[x][y].mine = true;
      } else if (this.board[x][y].mine === true) {
        // Eine Stelle suchen die keine Mine beinhaltet
        let found = false;
        for (let row = x; row < rows; row++) {
          for (let col = y; col < cols; col++) {
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

  revealTile(row, col) {
    let tile = this.board[row][col];

    if (tile.hidden) {
      tile.hidden = false;

      if (tile.adjacentMines === 0) {
        this.revealMultiple(row,col);
      }
    }

    this.checkGameStatus();
  }
  
revealMultiple(row,col) {
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      // Check if the position is within the board boundaries
      if (i >= 0 && i < this.board.length && j >= 0 && j < this.board[i].length) {
        // Recursively reveal adjacent tiles without adjacent mines
        if (this.board[i][j].adjacentMines === 0 && this.board[i][j].hidden) {
          this.revealTile(i, j);
          document.getElementById(`tile-${i}-${j}`).dataset.hidden = "false";
        } else if (this.board[i][j].adjacentMines > 0 && this.board[i][j].hidden) {
          this.board[i][j].hidden = false;
          document.getElementById(`tile-${i}-${j}`).dataset.hidden = "false";
          document.getElementById(`tile-${i}-${j}`).textContent = this.board[i][j].adjacentMines
        }
      }
    }
  }
}

markTile(row, col) {
  let tile = this.board[row][col];

  if (!tile.marked && tile.hidden) {
    tile.marked = true;
  }
}

checkGameStatus() {
  let won = true;
  let lost = false;

  for (let row = 0; row < this.board.length; row++) {
    for (let col = 0; col < this.board[row].length; col++) {
      const tile = this.board[row][col];

      // Wenn ein Feld ohne Mine noch verdeckt ist hat der Spieler nicht gewonnen
      if (!tile.mine && tile.hidden) {
        won = false;
      }

      // Wenn eine Mine gefunden wird und sie nicht mehr verdeckt ist, hat der Spieler verloren
      if (tile.mine && !tile.hidden) {
        won = false;
        lost = true;
        break;
      }
    }

    if (lost) {
      break;
    }
  }

  if (won) {
    console.log("gewonnen");
  } else if (lost) {
    console.log("verloren");
  } else {
    console.log("weiter");
  }
}


}

export { Gameboard };
