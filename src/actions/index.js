import { AUTH_STATUS_SUCCESS, AUTH_STATUS_LOGINOUT } from "./types"

// 登录模态窗关闭
const LOGIN_MODAL_HIDE = 'login_modal_hide'
const LOGIN_MODAL_SHOW = 'login_modal_show'
// 登录模态从展示
export const loginModalShow = () => dispatch => {
    dispatch({type: LOGIN_MODAL_SHOW})
}

export const loginModalHide = () => dispatch => {
    dispatch({type: LOGIN_MODAL_HIDE})
}

// 登录成功
export const loginSuccess = () => dispatch => {
    dispatch({type: AUTH_STATUS_SUCCESS})
}
// 注销登录
export const loginOut = () => dispatch => {
    dispatch({type: AUTH_STATUS_LOGINOUT})
}
