import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from "react-router-dom"
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

const router = routerMiddleware(BrowserRouter)
const enhancer = compose(
    applyMiddleware(thunk, router),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)
    if(module.hot) {
        module.hot.accept("../reducers", () => {
            const nextReducer = require('../reducers').preventDefault()
            store.replaceReducer(nextReducer)
        })
    }
    return store
}