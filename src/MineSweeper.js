import React, {  useState } from 'react';
import {StyleSheet,SafeAreaView, View, Button, Text} from 'react-native';
import Grid from './component/grid';
import bombMapFactory from './component/bombMapFactory';
import Animation from './component/animation';
import {plantBombs, displayCells, onlyBombLeft} from './component/setBombsInPosition';
import _ from 'lodash/fp';
export default () => {
  const size = 10;
  const [bombMap, upgradeGrid] = useState(bombMapFactory(size));
  const [gameStatus, changeGameStatus] = useState('play');
  const restart = ()=>{
    upgradeGrid(bombMapFactory(size));
    changeGameStatus('play');
  };
  const cellLongAction = (itemSelected) => {
    let newGrid = _.clone(bombMap);
    if (!newGrid[itemSelected.y][itemSelected.x].isRevealed) {
      newGrid[itemSelected.y][itemSelected.x].isRevealed = true;
      newGrid[itemSelected.y][itemSelected.x].isFlaggued = true;
    }
    else if (newGrid[itemSelected.y][itemSelected.x].isFlaggued){
      newGrid[itemSelected.y][itemSelected.x].isFlaggued = false;
    }
    upgradeGrid(newGrid);
  };

  const cellAction = (itemSelected) => {
    let newGrid = _.clone(bombMap);
    newGrid = plantBombs(newGrid, size, itemSelected);
    if (newGrid[itemSelected.y][itemSelected.x].isBomb) {changeGameStatus('lost');}
    if (onlyBombLeft(newGrid, size)){changeGameStatus('win');}
    else {
      newGrid[itemSelected.y][itemSelected.x].isRevealed = true;
      newGrid = displayCells(newGrid, size, itemSelected);
      upgradeGrid(newGrid);
    }
  };
    return (
        <SafeAreaView style={styles.grid}>
            <Grid grid={_.flatMap(_.identity,bombMap)} size={size} cellAction={cellAction} cellLongAction={cellLongAction}/>
            <View>
              <Text>There is {size} bombs to find </Text>
              <Text>Long press to flag a cell </Text>
            </View>
            {gameStatus !== 'play' &&  <Animation >
              <Text>You {gameStatus}</Text>
              <Button title={'Restart'} onPress={()=>restart()} color="#841584"/>
            </Animation>}
        </SafeAreaView>

    );

};



const styles = StyleSheet.create({
  grid: {
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'space-around',
    flex:1,
  },
});
