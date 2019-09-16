import React from 'react'
import ReactDom from 'react-dom'
import './index.scss'

class Loading extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='init-loading-wrapper'>
                <div className="init-loading">
                    <div className="loading-ring">
                        <div className="loading-ball-holder">
                            <div className="loading-ball1"></div>
                            <div className="loading-ball2"></div>
                            <div className="loading-ball3"></div>
                            <div className="loading-ball4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const showLoading = () => {
    const wrapper = document.createElement('div')
    ReactDom.render(<Loading />, wrapper)
    document.body.appendChild(wrapper)
    return wrapper
}

const hideLoading = wrapper => {
    wrapper && document.body.removeChild(wrapper)
}

export const addLoading = function () {
    if (!window.loadingWrapper) {
        window.loadingWrapper = showLoading()
    }
}

export const removeLoading = function () {
    if (window.loadingWrapper) {
        hideLoading(window.loadingWrapper)
        window.loadingWrapper = null
    }
}

export default Loading