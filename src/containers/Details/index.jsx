import React, { useEffect, useState } from 'react'
import './index.scss'
import Axios from 'axios'

const Details = props => {
    const [authorInfo, setAuthorInfo] = useState({
        author: 'Mr.Wei',
        img: 'img',
        publishDate: 'Hello Project.',
        title: '你好啊， 世界.',
        content: 'bilibili.',
        readCount: 0,
        favoriteCount: 0,
        hasFavorite: 0
    })

    const fetchDetails = () => {
        const { id } = props.match.params
        Axios({
            url: `/mock/details/${id}`
        }).then(res => {
            const { data, success } = res.data
            if (success) {
                setAuthorInfo({
                    author: data.author,
                    img: data.img,
                    publishDate: data.publishDate,
                    title: data.title,
                    content: data.content,
                    readCount: data.readCount,
                    favoriteCount: data.favoriteCount,
                    hasFavorite: data.hasFavorite
                })
            }
        })
    }

    useEffect(() => {
        fetchDetails()
    }, [props])

    return (
        <div className="details">
            <div className="container">
                <div className="header">
                    <a href="" className="imgBox">
                        <img src={authorInfo.img} />
                    </a>
                    <div className="article-info">
                        <span className="user-name">{authorInfo.author}</span>
                        <span className="publish-date">{authorInfo.publishDate}</span>
                    </div>
                    <h4>{authorInfo.title}</h4>
                </div>
                <div className="detail-body">
                    <div>
                        {authorInfo.content}
                    </div>
                    <span className="read-counts">{authorInfo.readCount} 次阅读</span>
                    <span className="read-counts">{authorInfo.favoriteCount} 次点赞</span>
                </div>
                <div className="detail-footer">
                    {/* <i>x</i> */}
                </div>
            </div>
        </div>
    )
}

export default Details

