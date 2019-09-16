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
