import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ModalContainer from './ModalContainer.jsx'
import {
    // signinUser, 
    loginModalHide
} from '../../actions/index'
import './index.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    handleChange = event => {
        const target = event.target
        if (target.type === 'text') {
            this.setState({
                userName: target.value
            })
        }

        if (target.type === 'password') {
            this.setState({
                password: target.value
            })
        }
    }

    toLogin = () => {
        const { userName, password } = this.state
        const {
            // signinUser, 
            loginModalHide } = this.props

        if (userName === '' || userName !== 'admin') {
            alert('请输入正确的账号')
            return
        } else if (password === '' || password !== '123456') {
            alert('请输入正确的密码')
            return
        }

        // signinUser({ userName, password }).then(res => {
        //     if (res.success) {
                loginModalHide()
        //     }
        // }).catch(err => {
        //     console.error(err)
        // })
    }

    render() {
        const { isLoginModalShow, loginModalHide } = this.props
        const { visible } = isLoginModalShow
        const divStyle = {
            zIndex: visible ? '1' : '-1'
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
                                    <input type='text' placeholder="请输入账号" onChange={this.handleChange} value={this.state.userName}></input>
                                    <input type='password' placeholder="请输入密码" onChange={this.handleChange} value={this.state.password}></input>
                                    <input type="submit" className="submit-btn" value="登录" onClick={this.toLogin}></input>
                                    <a href="">忘记密码</a>
                                    <p className="login-tips">登录协议</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </ModalContainer>

        )
    }
}

const mapStateToProps = state => ({
    // 建立映射关系 state->props,方便组件取用
    isLoginModalShow: state.isLoginModalShow
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        // signinUser,
        loginModalHide
    },
        dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)