function getCurrentObject(){
    if (falObjects.length === 0 || !falObjects.find(object => object.state === 'falling')){
        let curObj = nonObjects[Math.floor(Math.random() * nonObjects.length)];
        curObj = JSON.parse(JSON.stringify(curObj));
        curObj.state = "falling";
        curObj.position = curObj.positions[Math.floor(Math.random() * curObj.positions.length)];
        falObjects.push(curObj);
        return curObj;
    }
    return falObjects.find(object => object.state === 'falling');
}

var createPlayground = (h=HEIGHT, w=WIDTH) => (new Array(h).fill().map( el => (new Array(w).fill())));

function addToStaticObjCells(objectFigure){
    for (let cell of objectFigure.position) {
        rowsFull[cell[0]] += 1;
        statObjectsCells.push({'position' : cell, 'type': objectFigure.type});

    }
    checkRows();
}

function move(func){
    let currentObject = getCurrentObject();
    let changeCoords = true;
    let newPosArr = [];
    for (let cellIndex = currentObject.position.length-1; cellIndex >= 0; cellIndex--){
        let funcRes = func(currentObject, cellIndex);
        console.log(funcRes);
        if(!funcRes){
            changeCoords = false;
            cellIndex = -1;
        }else if (funcRes === true){
            console.log(funcRes);
            return true;
        }
        else {
            newPosArr.push(funcRes);

        }
    }

    if (changeCoords) {
        newPosArr = newPosArr.reverse();
        currentObject.position = JSON.parse(JSON.stringify(newPosArr));
    }
    playground = createPlayground();
    renderPlayground()
}

function mRight(currentObject, cellIndex) {
    let cell = currentObject.position[cellIndex];
    if (cell[1] < WIDTH-1 && checkCell([cell[0], cell[1]+1])){
        let newCellArr = [];
        newCellArr[0] = cell[0];
        newCellArr[1] = cell[1]+1;
        return newCellArr;
    } else{
        return false;
    }
}

function mLeft(currentObject, cellIndex) {
    let cell = currentObject.position[cellIndex];
    if (cell[1] > 0 && checkCell([cell[0], cell[1]-1])){
        let newCellArr = [];
        newCellArr[0] = cell[0];
        newCellArr[1] = cell[1]-1;
        return newCellArr;
    } else{
        return false;
    }
}

function mDown(currentObject, cellIndex) {
    let cell = currentObject.position[cellIndex];
    if (cell[0] > 0 && checkCell([cell[0]-1, cell[1]])){
        let newCellArr = [];
        newCellArr[0] = cell[0] - 1;
        newCellArr[1] = cell[1];
        return newCellArr;
    } else {
        if (!currentObject.drawn) {
            return true;
        }
        changeCoords = false;
        falObjects.pop();
        addToStaticObjCells(currentObject);
    }

}

function checkCell(cellPos){
    for (let statCell of statObjectsCells) {
        if (statCell.position[0] === cellPos[0] && statCell.position[1] === cellPos[1]){
            return false;
        }
    }
    return true;
}

function checkRows(){
    for (let rowIndex = 0; rowIndex < HEIGHT; rowIndex++){
        if (rowsFull[rowIndex] >= WIDTH) {
            console.log("Start deleting", rowIndex);
            deleteRow(rowIndex);
            checkRows();
        }
    }
}


function deleteRow(rowIndex) {
    console.log("delete", rowsFull);
    for (let cellInd = 0; cellInd < statObjectsCells.length; cellInd++) {
        if (statObjectsCells[cellInd].position[0] === rowIndex) {
            statObjectsCells.splice(cellInd, 1);
            rowsFull[rowIndex] -= 1;
            cellInd--;
        } else if (statObjectsCells[cellInd].position[0] > rowIndex){
            rowsFull[statObjectsCells[cellInd].position[0]] -= 1;
            rowsFull[statObjectsCells[cellInd].position[0]-1] += 1;
            statObjectsCells[cellInd].position[0] -= 1;

        }

    }
    console.log("deleted", rowsFull);

}


function theEndRender(){
    playground = createPlayground(11, 14);

    falObjects = endLetterObjects;
    statObjectsCells = [];
    renderPlayground(11, 14);
}
