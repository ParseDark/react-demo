import React, { useState, useEffect } from 'react'
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

const Home = props => {
    const [tagText, setTagText] = useState(['node.js', 'react', 'vue', 'go'])
    const [articleArr, setArticleArr] = useState([
        {
            title: '之美满思战运次低器天矿第写之有。料收用色转持史府特象观改。么火济它构儿学回量劳会立细任打出。',
            content: '之美满思战运次低器天矿第写之有。料收用色转持史府特象观改。么火济它构儿学回量劳会立细任打出。',
            sid: ''
        }
    ])

    const toDetails = id => {
        const { auth, loginModalShow } = props
        if (auth) {
            const { history } = props
            history.push({
                pathname: `/details/${id}`
            })
        } else {
            loginModalShow()
        }
    }


    useEffect(() => {
        const fetchList = (params, isRefresh) => {
            addLoading()
            const removeLoadingHook = removeLoading
            Axios({
                url: "/mock/list"
            }).then(res => {
                const { success } = res.data
                if (success) {
                    removeLoadingHook()
                    let data
                    if (isRefresh) {
                        data = res.data.list
                    } else {
                        data = articleArr.concat(res.data.list)
                    }
                    setArticleArr(data)
                }
            })
        }
        fetchList({
            page: 1,
            type: 0
        })
    }, [props])



    return (
        <div className="home">
            <div className="fix-header-nav">
                {
                    tagText.map((item, index) => {
                        return (
                            <Tag color="magenta" key={index}>{item}</Tag>
                        )
                    })
                }
            </div>

            <div className="list-warp">
                {
                    articleArr.map((item, index) => (
                        <a className="article-item" key={item.title} onClick={() => toDetails(index)}>
                            <Title level={4} className="title-box">{item.title}</Title>
                            <Paragraph className="content-box">
                                {item.content}
                            </Paragraph>
                        </a>
                    ))
                }
                <div className='loadMore'>
                    <span className='loadMoreText'>
                        加载更多
                        </span>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return ({
        auth: state.auth.auth.authenticated
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)