import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigation';
import ListScreen from './app/screens/ListScreen/index';
import {store} from 'app/store/store';
const App = () => (
  <Provider store={store}>
    {/* <AppNavigator /> */}
    <ListScreen/>
  </Provider>
);

export default App;
