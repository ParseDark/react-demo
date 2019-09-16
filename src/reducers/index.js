import {combineReducers} from 'redux'
import { 
    // authReducer, 
    isModalShowReducer 
} from './auth_reducer'

export default combineReducers({
    // auth: authReducer,
    isLoginModalShow: isModalShowReducer
})