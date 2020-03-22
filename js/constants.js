// constants.js
const TYPE_COLORS = {
    "L": 'red',
    "T": 'purple',
    "I": 'green',
    "E": 'black'
};

// Event keys
const DOWN  = 40;
const LEFT  = 37;
const RIGHT = 39;
const PAUSE = 32;

const HEIGHT = 10;
const WIDTH = 5;

const endLetterObjects = [
    {
        type: 'E',
        state: 'T',
        position: [[10, 0], [10, 1], [10, 2], [10, 3], [10, 4],
            [9, 2], [8, 2], [7, 2], [6, 2]]
    }, {
        type: 'E',
        state: 'H',
        position: [[10, 6], [10, 9], [9, 6], [9, 9],
            [8, 6], [8, 7], [8, 8], [8, 9],
            [7, 6], [7, 9], [6, 6], [6, 9]]
    }, {
        type: 'E',
        state: 'E',
        position: [[10, 11], [10, 12], [10, 13],
            [9, 11], [8, 11], [8, 12], [8, 13],
            [7, 11], [6, 11], [6, 12], [6, 13]]
    }, {
        type: 'E',
        state: 'E',
        position: [[4, 0], [4, 1], [4, 2],
            [3, 0], [2, 0], [2, 1], [2, 2],
            [1, 0], [0, 0], [0, 1], [0, 2]]
    }, {
        type: 'E',
        state: 'N',
        position: [[4, 4], [4, 7], [3, 4], [3, 5], [3, 7],
            [2, 4], [2, 6], [2, 7], [1, 4], [1, 7],
            [0, 4], [0, 7]]
    }, {
        type: 'E',
        state: 'D',
        position: [[4, 9], [4, 10], [4, 13], [3, 9], [3, 11], [3, 13],
            [2, 9], [2, 11], [2, 13], [1, 9], [1, 11], [0, 9], [0, 10], [0, 13]]
    }

];