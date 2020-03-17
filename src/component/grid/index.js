import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Cell from '../cell';
const Grid = ({size, grid, cellAction})=>(
    <FlatList
        contentContainerStyle={styles.flatListInnerStyle}
        data={grid}
        numColumns={size}
        renderItem={(e)=>Cell(e, cellAction)}
        keyExtractor={(item) => `${item.x},${item.y}`}
    />
);


const styles = StyleSheet.create({
    flatListInnerStyle:{
        flexGrow: 1, justifyContent: 'center',
    },
});
export default Grid;
