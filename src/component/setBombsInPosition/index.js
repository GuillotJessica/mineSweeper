import _ from 'lodash/fp';
export const plantBombs = (bombMap = [], size, lastTouched)=>{
    let newBombMap = _.clone(bombMap);
    const bombNumber = Math.floor(size);
    const flatArray = _.flatMap(_.identity, bombMap);
    const protectFirstItemTouched =  _.pull(lastTouched,flatArray);
    const bombPosition = _.sampleSize(bombNumber,protectFirstItemTouched);
    _.forEach(e =>{
        newBombMap[e.y][e.x].isBomb = true;
        newBombMap[e.y][e.x].isRevealed = true;
    }, bombPosition);

    return newBombMap;
};

export const surroundingCells = (newBombMap, size, e) =>{
    const range = _.range(0, size );
    let newArray = [];
    // top left
    if (_.includes(e.y - 1, range) && _.includes(e.x - 1, range)){
        newArray.push(newBombMap[e.y - 1][e.x - 1]);
    }

    // top
    if (_.includes(e.y - 1, range )){
        newArray.push(newBombMap[e.y - 1][e.x]);
    }

    // top right
    if (_.includes(e.y - 1, range) && _.includes(e.x + 1, range)){
        newArray.push(newBombMap[e.y - 1][e.x + 1]);
    }

    // left
    if ( _.includes(e.x - 1, range)){
        newArray.push(newBombMap[e.y][e.x - 1]);
    }

    // right
    if ( _.includes(e.x + 1, range) ){
        newArray.push(newBombMap[e.y][e.x + 1]);
    }

    // bottom left
    if (_.includes(e.y + 1, range) && _.includes(e.x - 1, range) ){
        newArray.push(newBombMap[e.y + 1][e.x - 1]);
    }

    // bottom
    if (_.includes(e.y + 1, range)){

        newArray.push(newBombMap[e.y + 1][e.x]);
    }

    // bottom right
    if (_.includes(e.y + 1, range) && _.includes(e.x + 1, range)){
        newArray.push(newBombMap[e.y + 1][e.x + 1]);
    }
    return newArray;
};
export const displayCells = (newGrid, size, itemSelected)=>{
    let newArray = _.clone(newGrid);
        const aroundCells =  surroundingCells(newArray, size, itemSelected);
        const bombsAroundCount = _.filter('isBomb',aroundCells).length;
        newArray[itemSelected.y][itemSelected.x].bombsAroundCount = bombsAroundCount;
        newArray[itemSelected.y][itemSelected.x].isRevealed = true;
    return newArray;
};
