import React from 'react'
import { Tag, Typography } from 'antd';
import './index.scss'
import Axios from 'axios';
import { addLoading, removeLoading } from '../../components/Loading/index.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    loginModalShow,
    loginSuccess,
    loginOut
} from '../../actions/index'

const { Title, Paragraph } = Typography;


const mapStateToProps = state => {
    return ({
        auth: state.auth.authenticated
    })
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginSuccess,
        loginOut,
        loginModalShow
    },
        dispatch)
}



class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            articleArr: [{
                title: '之美满思战运次低器天矿第写之有。料收用色转持史府特象观改。么火济它构儿学回量劳会立细任打出。',
                content: '之美满思战运次低器天矿第写之有。料收用色转持史府特象观改。么火济它构儿学回量劳会立细任打出。',
                sid: ''
            }]
        }

        this.fetchList = (params, isRefresh) => {
            addLoading()
            Axios({
                url: "/mock/list"
            }).then(res => {
                const { result, success } = res.data
                console.log(result)
                if (success) {
                    removeLoading()
                    let data
                    if (isRefresh) {
                        data = res.data.list
                    } else {
                        data = this.state.articleArr.concat(res.data.list)
                    }
                    this.setState({
                        articleArr: data
                    })
                }
            })
        }

        this.toDetails = id => {
            const { authenticated, loginModalShow } = this.props
            if (!authenticated) {
                const { history } = this.props
                history.push({
                    pathname: `/details/${id}`
                })
            } else {
                loginModalShow()
            }
        }

    }

    componentDidMount() {
        this.fetchList({
            page: 1,
            type: 0
        })
    }
    render() {
        return (
            <div className="home">
                <div className="fix-header-nav">
                    <Tag color="magenta" >推荐</Tag>
                    <Tag color="geekblue">生活</Tag>
                    <Tag color="purple">科技</Tag>
                </div>

                <div className="list-warp">
                    {
                        this.state.articleArr.map((item, index) => (
                            <a className="article-item" key={index} onClick={() => this.toDetails(item.sid)}>
                                {/* <Title level={2}>设计资源</Title> */}
                                <Title level={4} className="title-box">{item.title}</Title>
                                <Paragraph className="content-box">
                                    {item.content}
                                </Paragraph>
                            </a>
                        ))
                    }

                </div>
            </div >
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

