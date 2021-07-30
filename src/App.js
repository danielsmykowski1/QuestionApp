import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

import AppContainer from './AppContainer';

const store = createStore(reducers);

export default App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <AppContainer />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});
