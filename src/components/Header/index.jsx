import React from 'react'
import { Link } from "react-router-dom"
import { Avatar, Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import "./index.scss"

import { loginModalShow } from '../../actions/index'


const mapStateToProps = state => {
    return {
        auth: state.auth.auth.authenticated
    }
}
// const mapStateToProps = state => ({
//     // 建立映射关系 state->props,方便组件取用
//     auth: state.auth
// })



const mapDispathchToProps = dispatch => {
    return bindActionCreators({
        loginModalShow
    },
        dispatch
    )
}

const Header = props => {
    const { loginModalShow, auth } = props
    return (
        <header>
            <nav className='header-title'>
                <div className='header-log'>
                    <Link to="/">
                        <Avatar size="small" icon="user" />
                    </Link>
                </div>
                {
                    !auth && (
                        <div className="header-login">
                            <Button type="primary" size="small" onClick={loginModalShow}>登录</Button>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}



export default connect(
    mapStateToProps,
    mapDispathchToProps
)(Header)
