import React from 'react'
import App from './app';
import ReactDOM from "react-dom";
import {createStore, compose} from "redux";
import './styles/_index.scss';
import {Provider} from "react-redux";
import {rootReducer} from './redux/reducers/rootReducer'

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);