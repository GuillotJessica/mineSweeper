import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Cell = ({item}, action) => (
    <TouchableOpacity style={styles.cell} onPress={()=>action(item)}>
        <Text>{item.isRevealed ? item.isBomb ? '💣' : typeof item.bombsAroundCount === 'number'  ? item.bombsAroundCount : '' : ''}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cell:{
        borderColor: 'black',
        borderWidth: 1,
        width:40,
        height:40,
    },
});

export default Cell;
