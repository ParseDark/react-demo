import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ModalContainer from './ModalContainer.jsx'
import {
    // signinUser, 
    loginSuccess,
    loginModalHide
} from '../../actions/index'
import './index.scss'
import Axios from 'axios'


const Login = (props) => {
    const { isLoginModalShow, loginModalHide } = props
    const { visible } = isLoginModalShow
    const divStyle = {
        zIndex: visible ? '1' : '-1'
    }
    const [userInfo, setUserInfo] = useState({
        userName: '',
        password: ''
    })

    const handleChange = event => {
        const target = event.target
        let newUserInfo = {}
        if (target.type === 'text') {
            newUserInfo = { ...userInfo, userName: target.value }
        }

        if (target.type === 'password') {
            newUserInfo = { ...userInfo, password: target.value }
        }
        setUserInfo(newUserInfo)
    }

    const toLogin = () => {
        const { userName, password } = userInfo
        if (userName === '' || userName !== 'admin') {
            alert('请输入正确的账号')
            return
        } else if (password === '' || password !== '123456') {
            alert('请输入正确的密码')
            return
        }

        fetchLogin()
    }

    const fetchLogin = () => {
        const { userName, password } = userInfo
        const { loginModalHide, loginSuccess } = props
        Axios({
            url: '/mock/login',
            method: 'post',
            data: {
                userName,
                password
            }
        }).then(res => {
            const { success } = res.data
            if (success) {
                loginSuccess()
                loginModalHide()
            }
        })
    }

    return (
        <ModalContainer>
            <div className={`${visible ? "modal fade show" : "modal fade"}`}
                style={divStyle}>
                <div className="modal-backdrop"></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i className="iconfont" onClick={loginModalHide}>
                                X
                                    </i>
                            <h4 className="modal-title">登录</h4>
                        </div>
                        <div className="modal-body">
                            <input type='text' placeholder="请输入账号" onChange={handleChange} value={userInfo.userName}></input>
                            <input type='password' placeholder="请输入密码" onChange={handleChange} value={userInfo.password}></input>
                            <input type="submit" className="submit-btn" value="登录" onClick={toLogin}></input>
                            <a href="">忘记密码</a>
                            <p className="login-tips">登录协议</p>
                        </div>
                    </div>
                </div>

            </div>
        </ModalContainer>
    )
}

const mapStateToProps = state => ({
    // 建立映射关系 state->props,方便组件取用
    isLoginModalShow: state.isLoginModalShow
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        // signinUser,
        loginSuccess,
        loginModalHide
    },
        dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)