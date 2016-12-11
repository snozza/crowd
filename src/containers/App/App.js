import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from '../../redux/store';
import Root from '../root';
import './App.css';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Root />
      </Provider>
    );
  }
}

export default App;
