import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/Header/index.jsx'
import Home from './Home/index.jsx'
import Details from './Details/index.jsx'
import Mine from './Mine/index.jsx'
import Login from './Login/index.jsx'

const AppRouter = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <Login></Login>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/mine" component={Mine}></Route>
                <Route exact path="/details/:id" component={Details}></Route>
            </Switch>
        </React.Fragment>
    )
}

export default AppRouter