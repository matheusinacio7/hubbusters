import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './utils/createStore';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rootReducer from './reducers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/hubbusters">
      <Provider store={ createStore(rootReducer) }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
