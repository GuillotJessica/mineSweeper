import React, { PureComponent } from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Grid from './component/grid';

export default class MineSweeper extends PureComponent {
  constructor(props) {
    super(props);
    const grid = Grid(10);
    this.state = { grid };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.grid.map((value, row) => (
          <View key={row} style={styles.row}>
            {value.map((v, column) => {
              return (
                <TouchableOpacity
                  key={`${row},${column}`}
                  onPress={() => console.log({ row, column, v })}
                  style={[styles.cell, {
                    backgroundColor: this.state.grid[row][column].backgroundColor
                        ? this.state.grid[row][column].backgroundColor
                        : 'green'}]}
                  col={row}
                />
              );
            })}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
  row:{ flexDirection: 'row' },
  cell:{

    borderColor: 'black',
    borderWidth: 1,
    width: 30,
    height: 30,
  },
});
