import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { List } from './components';

export const App = () => (
  <Provider store={store}>
    <List />
  </Provider>
);