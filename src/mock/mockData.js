import Mock from 'mockjs'

const mockActicleList = Mock.mock('/mock/list', 'get', {
    success: true,
    'userId|5': '',
    isRefresh: true,
    'list|10': [{
        title: '@cparagraph',
        content: '@cparagraph',
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1
    }]
})

const mockActicleDetail = Mock.mock(/mock\/details\/\d+/, 'get', {
    success: true,
    data: {
        author: '@word(3, 5)',
        img: '@url',
        publishDate: '@date("yyyy-MM-dd")',
        title: '@sentence(5)',
        content: '@paragraph(10, 15)',
        'readCount': 200,
        'favoriteCount': 300,
        'hasFavorite': 300,
    }
})

const mockLogin = Mock.mock(/mock\/login/, 'post', {
    success: true,
    data: {
        
    }
})

export default {
    mockActicleDetail,
    mockActicleList,
    mockLogin
}