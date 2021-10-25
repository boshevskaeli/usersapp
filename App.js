import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './app/navigation';
import ListScreen from './app/screens/ListScreen/index';
import {reduxstore} from 'app/store/store';
import {persistor} from 'app/store/store';
const App = () => (
  <Provider store={reduxstore}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <AppNavigator /> */}
      <ListScreen />
    </PersistGate>
  </Provider>
);

export default App;
