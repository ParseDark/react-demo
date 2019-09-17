import React from 'react'
import { Avatar, Button } from 'antd';
import './index.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    loginOut
} from '../../actions/index'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginOut
    },
        dispatch)
}

class Mine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    loginOut = () => {
        const { loginOut, history } = this.props
        loginOut()
        history.push({
            pathname: `/`
        })
    }

    render() {
        return (
            <div className="webContainer">
                <div className="mineInfoBox">
                    <div className="avatar">
                        <Avatar size="larget" icon="user" />
                    </div>
                    <div className="userText">
                        <div className="nameText">weihaidong</div>
                        <div className="enterDate">2019.12.20</div>
                    </div>
                </div>
                <div className="myOprator">
                    <ul>
                        <li>我的发布</li>
                        <li>我的收藏</li>
                        <li>我的点赞</li>
                    </ul>
                </div>
                <div className="setting">
                    <ul>
                        <li>设置</li>
                    </ul>
                </div>
                <div className="loginout">
                    <Button type="danger" size={"large"} onClick={() => this.loginOut()}>退出登录</Button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Mine)
