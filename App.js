/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import MineSweeper from './src/MineSweeper';

const App: () => React$Node = () => (
  <MineSweeper style={styles.mineSweeper} />
);

export default App;

const styles = StyleSheet.create({
    mineSweeper:{
        flex: 1, backgroundColor: 'blue',
    },
});
