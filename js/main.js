const player1 = "X";
const player2 = "O";

let playerTurn = 0;

let board = ["", "", "", "", "", "", "", "", ""];

let $selectedCell = $('.board-cell');
let $gameBoard = $('#game-board');
const $btnReset = $('#btn-restart');

const clearBoard = function() {
    board = ["", "", "", "", "", "", "", "", ""];
    board.forEach(function(cell, idx){
        $selectedCell
            .removeClass()
            .addClass('empty board-cell')
            .contents().filter(function() {
                return this.nodeType === Node.TEXT_NODE;
            }).remove();
    });
    playerTurn = 0;
};

const playerMove = function(e){
    if(playerTurn % 2 === 0 && $(this).hasClass('empty')){
        this.append(player1);
        $(this)
            .removeClass('empty')
            .addClass('p1');
        playerTurn += 1;
    } else if($(this).hasClass('empty')){
        this.append(player2);
        $(this)
            .removeClass('empty')
            .addClass('p2');
        playerTurn += 1;
    } else {
        console.log("cell taken");
        playerTurn += 0;
        }
    return playerTurn;
};

function initialize(){
    clearBoard;
}

function play() {
    $selectedCell.click(playerMove);
    $btnReset.click(clearBoard);
}

initialize();
play();