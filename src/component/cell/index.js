import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
const revealCellValue = (item)=>{
    if (item.isFlaggued)
    {return '🏴‍☠️';}
    else  if (item.isBomb)
    {return '💣';}
    else if (typeof item.bombsAroundCount === 'number')
        {return item.bombsAroundCount;}
    else {return '';}
};
const Cell = ({item}, action, longAction) => (
    <TouchableOpacity style={styles.cell} onPress={()=>action(item)} onLongPress={()=>longAction(item)}>
        <Text>{item.isRevealed ? revealCellValue(item) : ''}</Text>
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
