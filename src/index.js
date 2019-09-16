import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from './store/configureStore'
import AppRouter from './containers/AppRouter'
import * as serviceWorker from './serviceWorker';
import './index.css'
import 'antd/dist/antd.css';

import './mock/mockData'



const store = configureStore()

render(
    <HashRouter>
        <Provider store={store}>
            <AppRouter></AppRouter>
        </Provider>
    </HashRouter>
, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
