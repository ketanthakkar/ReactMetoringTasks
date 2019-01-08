import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import Main from './Main'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);