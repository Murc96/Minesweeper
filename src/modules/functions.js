'use strict'
import { Gameboard } from "./gameboard";

export function createTileDivs(x, y, status, size, gameboard) {
    const tileDiv = document.createElement("div");
    tileDiv.dataset.hidden = status;
    tileDiv.id = `tile-${x}-${y}`;
    tileDiv.classList.add("tile");
    let boardElement = document.getElementById("board");
    boardElement.style.setProperty('--size', size);
    boardElement.appendChild(tileDiv);
}
