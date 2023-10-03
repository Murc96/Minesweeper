import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import "./styles.css";

let player = new Player("Marc", "Beginner");
let gameboard = new Gameboard(player);

gameboard.createGameboard();
gameboard.placeMines();

console.log(gameboard);
