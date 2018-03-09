// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './pages/App';



ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app'),
);

