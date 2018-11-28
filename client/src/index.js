import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />, document.getElementById('root')
    </Provider>
);
