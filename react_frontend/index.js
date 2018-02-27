// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appReducer from './redux/reducers';
import { CHANGE_USER_TYPE, UserTypes } from './redux/actions';

import App from './pages/App';

const store = createStore(appReducer);

ReactDOM.render(<App />, document.getElementById('app'));

