import React from 'react';
import logo from './logo.svg';
import MainApp from "../src/container/mainApp"
import './App.css';
import { Provider } from 'react-redux';
import store from './store';



function App() {
 
  return (
    <div>
      <Provider store={store}>
         <MainApp/>
      </Provider>
    </div>
  );
}

export default App;
