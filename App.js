import React from 'react';
import './src/config/ReactronConfig';

import {
  SafeAreaView, StyleSheet,
} from 'react-native';

import AppNavigation from './src/navigation/appNavigation';

import { Provider } from 'react-redux';
import  reduxStore from './src/redux/store';

const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
// export default App;
export default (__DEV__ ? console.tron.overlay(App) : App);

