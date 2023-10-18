"use strict";
import { createTileDivs, createModal } from "./functions";

class Gameboard {
  constructor(player) {
    this.board = [];
    this.difficulty = player.difficulty;
    this.rows = 0;
    this.cols = 0;
    this.mines = 0;
  }

  getDifficulty() {

    if (this.difficulty === "beginner") {
      this.rows = 8;
      this.cols = 8;
      this.mines = 10;
    } else if (this.difficulty === "intermediate") {
      this.rows = 16;
      this.cols = 16;
      this.mines = 40;
    } else if (this.difficulty === "advanced") {
      this.rows = 16;
      this.cols = 30;
      this.mines = 99;
    }
  }

  createGameboard() {

    this.getDifficulty();

    for (let x = 0; x < this.rows; x++) {
      let innerArray = [];
      for (let y = 0; y < this.cols; y++) {
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

    for (let i = 0; i < this.mines; i++) {
      let x = parseInt(Math.random() * this.rows);
      let y = parseInt(Math.random() * this.cols);

      if (this.board[x][y].mine === false) {
        this.board[x][y].mine = true;
      } else if (this.board[x][y].mine === true) {
        // Eine Stelle suchen die keine Mine beinhaltet
        let found = false;
        for (let row = x; row < this.rows; row++) {
          for (let col = y; col < this.cols; col++) {
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
        this.revealMultiple(row, col);
      }
    }

    this.checkGameStatus();
  }

  revealMultiple(row, col) {
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
      createModal(won, lost);
    } else if (lost) {
      console.log("verloren");
      createModal(won, lost);
    } else {
      console.log("weiter");
    }
  }


}

export { Gameboard };
