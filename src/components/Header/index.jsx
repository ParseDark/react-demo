import React from 'react'
import { Link } from "react-router-dom"
import { Avatar, Button } from 'antd';
import "./index.scss"

const Header = props => {
    return (
        <header>
            <nav className='header-title'>
                <div className='header-log'>
                    <Link to="/">
                       <Avatar size="small" icon="user" />
                    </Link>
                </div>
                <div className="header-login">
                    <Button type="primary" size="small">登录</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header
