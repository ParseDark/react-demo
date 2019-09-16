import Mock from 'mockjs'

export default Mock.mock('/mock/list','get',{
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