import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { createTileDivs } from "./modules/functions";
import "./styles.css";

let player = new Player("Marc", "beginner");
let gameboard = new Gameboard(player);

gameboard.createGameboard();
gameboard.placeMines();
gameboard.calculateAdjacentMines();


for (let x = 0; x < gameboard.board.length; x++) {
    for (let y = 0; y < gameboard.board[x].length; y++) {
        createTileDivs(x, y, gameboard.board[x][y].hidden, gameboard.board.length, gameboard);
    }
}

console.log(gameboard);
