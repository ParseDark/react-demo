
import {
    LOGIN_MODAL_SHOW,
    LOGIN_MODAL_HIDE,
    AUTH_STATUS_SUCCESS,
    AUTH_STATUS_LOGINOUT
} from '../actions/types'

export function isModalShowReducer(state = { visible: false, auth: { authenticated: false } }, actions) {
    switch (actions.type) {
        case LOGIN_MODAL_SHOW:
            return { ...state, visible: true }
        case LOGIN_MODAL_HIDE:
            return { ...state, visible: false }
        default:
            return state
    }
}

export function isAuthReducer(state = { auth: { authenticated: false } }, actions) {
    switch (actions.type) {
        case AUTH_STATUS_SUCCESS:
            return { ...state, auth: { authenticated: true } }
        case AUTH_STATUS_LOGINOUT:
            return { ...state, auth: { authenticated: false } }
        default: 
            return state
    }
}
