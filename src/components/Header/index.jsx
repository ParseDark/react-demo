import React from 'react'
import { Link } from "react-router-dom"
import { Avatar, Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import "./index.scss"

import { loginModalShow } from '../../actions/index'

const mapDispathchToProps = dispatch => {
    return bindActionCreators({
        loginModalShow
    },
        dispatch
    )
}

const Header = props => {
    const { loginModalShow } = props
    return (
        <header>
            <nav className='header-title'>
                <div className='header-log'>
                    <Link to="/">
                        <Avatar size="small" icon="user" />
                    </Link>
                </div>
                <div className="header-login">
                    <Button type="primary" size="small" onClick={loginModalShow}>登录</Button>
                </div>
            </nav>
        </header>
    )
}



export default connect(
    null,
    mapDispathchToProps
)(Header)
