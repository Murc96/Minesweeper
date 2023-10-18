import { Gameboard } from "./gameboard.js";
import { startGame } from "../index.js";

export function clearHTML() {
    document.body.innerHTML =`<h1>Minesweeper</h1><div id="board"></div>`;
}

document.getElementById("start").addEventListener("click", function () {
    startGame();
});

export function createTileDivs(x, y, status, sizeRows, sizeCols, gameboard) {
    const tileDiv = document.createElement("div");
    tileDiv.dataset.hidden = status;
    tileDiv.id = `tile-${x}-${y}`;
    tileDiv.classList.add("tile");
    let boardElement = document.getElementById("board");
    boardElement.style.setProperty('--sizeRows', sizeRows);
    boardElement.style.setProperty('--sizeCols', sizeCols);
    boardElement.appendChild(tileDiv);

    addRightClick(tileDiv,gameboard);

    addLeftClick(tileDiv,gameboard);
}

function addRightClick(tileDiv,gameboard) {
    tileDiv.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Prevent the default context menu from appearing on right-click
        const [clickedX, clickedY] = this.id.split("-").slice(1).map(Number);
        gameboard.markTile(clickedX, clickedY);
        this.dataset.hidden = "marked";
        console.log(gameboard);
    });
}

function addLeftClick(tileDiv,gameboard) {
    tileDiv.addEventListener("click", function () {
        
        const [clickedX, clickedY] = this.id.split("-").slice(1).map(Number);
        gameboard.revealTile(clickedX, clickedY);

        if(!gameboard.board[clickedX][clickedY].mine) {
            this.dataset.hidden = "false";
            if(gameboard.board[clickedX][clickedY].adjacentMines){
                document.getElementById(`tile-${clickedX}-${clickedY}`).textContent = gameboard.board[clickedX][clickedY].adjacentMines
            }
              
        } else if (gameboard.board[clickedX][clickedY].mine) {
            this.dataset.hidden = "mine";
        }
    });
}

/* export function createModal(won, lost) {
    if (won){
        let modal = document.createElement("div");
        let body = document.body;

        body.appendChild(modal);
        modal.classList.add("modal");
        modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p>Congratulations! You Won</p></div>'
    } else if (lost) {
        let modal = document.createElement("div");
        let body = document.body;

        body.appendChild(modal);
        modal.classList.add("modal");
        modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p>You lost....</p></div>'
    }
}  */