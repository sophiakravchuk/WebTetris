// events.js
document.addEventListener("keydown", event => {
    if (!endOfGame) {
        if (event.keyCode === PAUSE) {
            pauseGame();
        } else {
        }

        if (!pauseFlag){
            switch (event.keyCode) {
                case DOWN:
                    moveDown();
                    break;
                case LEFT:
                    moveLeft();
                    break;
                case RIGHT:
                    moveRight();
                    break;
                default:
                    break;
            }
        }
    }
});