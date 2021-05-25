import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {MainTab} from './src/screens/navigations';
import React from 'react';
import reducer from './src/store/reducers';

const store = configureStore({reducer});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainTab />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
