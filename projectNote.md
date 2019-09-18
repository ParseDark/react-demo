# react-redux: 社区应用demo

## 入口-项目结构
* container
装载页面文件，当前项目包括： 
    * Detail(详情)
    
    * Home(主页)

    * Login(登录页面)

    * Mine(个人中心)
* components
包含公用组件， 像
    * Header(导航栏)

    * Loading(全局Loading组件)
* index.js
    * 项目入口：
        - 挂载hashRouter
        - 注入Provider
        - 初始化store
        - 挂载react实例
* store/
包含redux相关配置文件， 分为生产配置和dev配置
    - 相同点， 都在挂载reducer
    - 不同点在于，dev的配置加入了很多中间件.便于追踪和调试.
* reducers/
包含项目不同的reducers， 并且在index.js中把redux结合.在store的config中初始化.
* actions/
actions包含对store中的state不同的操作, state改变只能由reducer操作actions发起.

## redux/react-router工作流
1. src/index.js
    * 完成store的初始化
    * HashRouter包裹根组件
    * Provider包裹根组件, 注入store
2. store/index.js: 初始化store， 注入reduers, 注入中间件
    * 区分环境
    * 加载对应中间件
    * 注入reducer
3. reduers/index.js: 编写reducer和暴露reducer
    * 合并单个reducer
    * 抽离type
    * 编写reducer 
4. actions/index.js: 编写action和暴露action
    * 编写每个对数据的操作
    * 暴露出每个操作
5. 组件内： 链接组件props与redux
    * 引入actions/index
    * 建立mapStateProps/mapDispatchToProps
        * mapStateProps: 建立state与props的映射关系， 并附加监听, 我们从props取state中对应的值.
        * mapDispatchToProps: 简历dispatch与props的映射关系， 我们从props取每个dispatch.
    * 使用react-redux的connect函数： 使用偏函数，预设mapStateProps和mapDispatchToProps, 然后包裹组件本身， 完成链接