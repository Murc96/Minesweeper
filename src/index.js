import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import "./styles.css";

let player = new Player("Marc", "beginner");
let gameboard = new Gameboard(player);

gameboard.createGameboard();
gameboard.placeMines();
gameboard.calculateAdjacentMines();


gameboard.revealTile(4,5);
gameboard.revealTile(0,2);
gameboard.revealTile(2,7);


console.log(gameboard);
