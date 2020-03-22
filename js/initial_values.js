var falObjects = [];

var statObjectsCells = [];

var nonObjects = [
{
    type: 'T',
    state: 'none',
    drawn: false,
    position: [[HEIGHT+1, 2], [HEIGHT+1, 3], [HEIGHT+1, 4], [HEIGHT, 3]],
    positions: [[[HEIGHT+1, 2], [HEIGHT+1, 3], [HEIGHT+1, 4], [HEIGHT, 3]],
                [[HEIGHT, 2], [HEIGHT, 3], [HEIGHT, 4], [HEIGHT+1, 3]],
                [[HEIGHT+2, 2], [HEIGHT+1, 2], [HEIGHT, 2], [HEIGHT+1, 3]],
                [[HEIGHT+2, 3], [HEIGHT+1, 3], [HEIGHT, 3], [HEIGHT+1, 2]]]
}, {
    type: 'L',
    state: 'none',
    drawn: false,
    position: [[HEIGHT+2, 1], [HEIGHT+1, 1], [HEIGHT, 1], [HEIGHT, 2]],
    positions: [[[HEIGHT+2, 2], [HEIGHT+1, 2], [HEIGHT, 2], [HEIGHT, 1]],
        [[HEIGHT+2, 1], [HEIGHT+1, 1], [HEIGHT, 1], [HEIGHT+2, 2]],
        [[HEIGHT+2, 2], [HEIGHT+1, 2], [HEIGHT, 2], [HEIGHT+2, 1]],
        [[HEIGHT+2, 1], [HEIGHT+1, 1], [HEIGHT, 1], [HEIGHT, 2]],
        [[HEIGHT+1, 1], [HEIGHT+1, 2], [HEIGHT+1, 3], [HEIGHT, 1]],
        [[HEIGHT+1, 1], [HEIGHT+1, 2], [HEIGHT+1, 3], [HEIGHT, 3]],
        [[HEIGHT, 1], [HEIGHT, 2], [HEIGHT, 3], [HEIGHT+1, 3]],
        [[HEIGHT, 1], [HEIGHT, 2], [HEIGHT, 3], [HEIGHT+1, 1]]
    ]
    }, {
    type: 'I',
    state: 'none',
    drawn: false,
    position: [[HEIGHT+2, 2], [HEIGHT+1, 2], [HEIGHT, 2]],
    positions: [[[HEIGHT+2, 2], [HEIGHT+1, 2], [HEIGHT, 2]],
        [[HEIGHT, 1], [HEIGHT, 2], [HEIGHT, 3]]]
}
];

var endOfGame = false;
var pauseFlag = false;

var rowsFull = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
