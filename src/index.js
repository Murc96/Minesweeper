import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { createTileDivs, clearHTML } from "./modules/functions";
import "./styles.css";

export function startGame() {
    const playerName = document.getElementById("name").value;
    const difficulty = document.getElementById("difficulty").value;

    let player = new Player(playerName, difficulty);
    let gameboard = new Gameboard(player);

    clearHTML();

    gameboard.createGameboard();
    gameboard.placeMines();
    gameboard.calculateAdjacentMines();


    for (let x = 0; x < gameboard.board.length; x++) {
        for (let y = 0; y < gameboard.board[x].length; y++) {
            createTileDivs(x, y, gameboard.board[x][y].hidden, gameboard.rows, gameboard.cols, gameboard);
        }
    }

    console.log(gameboard);
}





