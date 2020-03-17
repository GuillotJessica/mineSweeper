import React, {  useState } from 'react';
import {StyleSheet, View} from 'react-native';
import Grid from './component/grid';
import bombMapFactory from './component/bombMapFactory';
import {plantBombs, displayCells} from './component/setBombsInPosition';
import _ from 'lodash/fp';
export default () => {
  const size = 10;
  const [bombMap, upgradeGrid] = useState(bombMapFactory(size));
  const [isPristine, changePristineStatus] = useState(true);

  const cellAction = itemSelected => {
    let newGrid = _.clone(bombMap);
    if (isPristine){
      changePristineStatus(!isPristine);
      console.log(newGrid);
      newGrid = plantBombs(newGrid, size, itemSelected);
    }
    newGrid[itemSelected.y][itemSelected.x].isRevealed = true;
    newGrid = displayCells(newGrid, size, itemSelected);
    upgradeGrid(newGrid);
  };

    return (
        <View style={styles.grid}>
          <Grid grid={_.flatMap(_.identity,bombMap)} size={size} cellAction={cellAction}/>
        </View>
    );

};



const styles = StyleSheet.create({
  grid: {
    alignItems:'center',
  },
  flatListInnerStyle:{
    flexGrow: 1, justifyContent: 'center',
  },
  cell:{
    borderColor: 'black',
    borderWidth: 1,
    width:40,
    height:40,
  },
});
