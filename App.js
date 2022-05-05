import React from 'react';
import { StatusBar } from 'react-native';
import './src/config/ReactronConfig';

import {
  SafeAreaView, StyleSheet,
} from 'react-native';

import AppNavigation from './src/navigation/appNavigation';

import { Provider } from 'react-redux';
import reduxStore from './src/redux/store';
import colors from './src/config/colors';

const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" animated={true} translucent  backgroundColor="transparent"/>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorDarkBlue,
  },

});
// export default App;
export default (__DEV__ ? console.tron.overlay(App) : App);

