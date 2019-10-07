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

// class Details extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             author: 'Mr.Wei',
//             img: 'img',
//             publishDate: 'Hello Project.',
//             title: '你好啊， 世界.',
//             content: 'bilibili.',
//             readCount: 0,
//             favoriteCount: 0,
//             hasFavorite: 0
//         }
//     }

//     fetchDetails = () => {
//         const { id } = this.props.match.params
//         Axios({
//             url: `/mock/details/${id}`
//         }).then(res => {
//             const { data, success } = res.data
//             if (success) {
//                 this.setState({
//                     author: data.author,
//                     img: data.img,
//                     publishDate: data.publishDate,
//                     title: data.title,
//                     content: data.content,
//                     readCount: data.readCount,
//                     favoriteCount: data.favoriteCount,
//                     hasFavorite: data.hasFavorite
//                 })
//             }
//         })
//     }

//     componentDidMount() {
//         this.fetchDetails()
//     }

//     render() {
//         return (
//             <div className="details">
//                 <div className="container">
//                     <div className="header">
//                         <a href="" className="imgBox">
//                             <img src={this.state.img} />
//                         </a>
//                         <div className="article-info">
//                             <span className="user-name">{this.state.author}</span>
//                             <span className="publish-date">{this.state.publishDate}</span>
//                         </div>
//                         <h4>{this.state.title}</h4>
//                     </div>
//                     <div className="detail-body">
//                         <div>
//                             {this.state.content}
//                         </div>
//                         <span className="read-counts">{this.state.readCount} 次阅读</span>
//                         <span className="read-counts">{this.state.favoriteCount} 次点赞</span>
//                     </div>
//                     <div className="detail-footer">
//                         {/* <i>x</i> */}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Details

