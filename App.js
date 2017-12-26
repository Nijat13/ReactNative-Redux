import React from 'react';
import Expo from "expo";
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import configureStore from './src/store';
import Main from './src';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Main/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
