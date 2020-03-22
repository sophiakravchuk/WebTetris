// tetris.js
var playground = createPlayground();

console.log(playground);

// will add object positions to the emply playground array
function renderPositions(h = HEIGHT, w=WIDTH) {
    for (let object of falObjects){
        object.drawn = true;
        for (let cell of object.position){
            if (cell[0] > h-1 || cell[1] > w-1 || cell[0] < 0 || cell[1] < 0) {
                object.drawn = false;
                continue;
            }
            playground[cell[0]][cell[1]] = TYPE_COLORS[object.type];
        }
    }
    for (let statCell of statObjectsCells){
        console.log(statCell);
        if (statCell[0] > h-1 || statCell[1] > w-1 || statCell[0] < 0 || statCell[1] < 0) {
            continue;
        }
        playground[statCell.position[0]][statCell.position[1]] = TYPE_COLORS[statCell.type];
    }
}

function moveDown(obj) {
    console.log('moving down');
    return move(mDown);
}

function moveRight(obj) {
    console.log('moving right');
    move(mRight);
}

function moveLeft(obj) {
    console.log('moving left');
    move(mLeft);
}

function pauseGame() {
    console.log('pausing the game');
    clearInterval(gameInterval);
    pauseFlag = !pauseFlag;

}

renderPlayground();

// interval 1 second
function gameInterval() {
    setInterval((t) => {
        if (!pauseFlag && !endOfGame) {
            if (moveDown()) {
                console.log('END OF GAME!!!');
                endOfGame = true;
                clearInterval(gameInterval);
                theEndRender();
            }
        }
    }, 2000);
}
gameInterval();