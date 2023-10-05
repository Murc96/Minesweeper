import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import "./styles.css";

let player = new Player("Marc", "beginner");
let gameboard = new Gameboard(player);

gameboard.createGameboard();
gameboard.placeMines();
gameboard.calculateAdjacentMines();

//gameboard.uncoverCell(3, 5);

console.log(gameboard);
