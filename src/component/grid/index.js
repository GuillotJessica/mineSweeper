import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Cell from '../cell';
const Grid = ({size, grid, cellAction, cellLongAction})=>(
    <FlatList
        style={{maxHeight:'50%'}}
        contentContainerStyle={styles.flatListInnerStyle}
        data={grid}
        numColumns={size}
        renderItem={(e)=>Cell(e, cellAction, cellLongAction)}
        keyExtractor={(item) => `${item.x},${item.y}`}
    />
);


const styles = StyleSheet.create({
    flatListInnerStyle:{
        justifyContent: 'center',
    },
});
export default Grid;
