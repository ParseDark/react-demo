
import {
    LOGIN_MODAL_SHOW,
    LOGIN_MODAL_HIDE    
} from '../actions/types'

export function isModalShowReducer(state = {visible: false }, actions) {
    console.log(LOGIN_MODAL_HIDE, LOGIN_MODAL_SHOW)
    switch (actions.type) {
        case LOGIN_MODAL_SHOW: 
            return {...state, visible: true}
        case LOGIN_MODAL_HIDE: 
            return {...state, visible: false}
        default: 
            return state
    }
}
