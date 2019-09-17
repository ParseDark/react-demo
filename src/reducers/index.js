import {combineReducers} from 'redux'
import { 
    isAuthReducer, 
    isModalShowReducer 
} from './auth_reducer'

export default combineReducers({
    auth: isAuthReducer,
    isLoginModalShow: isModalShowReducer
})