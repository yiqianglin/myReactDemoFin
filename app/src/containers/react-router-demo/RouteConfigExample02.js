/**
 * Created by cc on 2017/4/7.
 */
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Henix extends React.Component{
    render(){
        return (<h5>henix</h5>)
    }
}

class Kuler extends React.Component{
    render(){
        return (<h5>kuler</h5>)
    }
}

class Daly extends React.Component{
    render(){
        const routeData = this.props.routeData
        return(
            <div>
                <h2>Daly</h2>
                <ul>
                    <li><Link to="/daly/one">one</Link></li>
                    <li><Link to="/daly/two">two</Link></li>
                </ul>

                {routeData.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} routeData={route}/>
                ))}
            </div>
        )
    }
}

const RouterConfig = [
    {
        path: '/henix',
        component: Henix,
    },
    {
        path: '/kuler',
        component: Kuler,
    },
    {
        path: '/daly',
        component: Daly,
        routes: [
            {
                path: '/daly/one',
                component: Henix
            },
            {
                path: '/daly/two',
                component: Kuler
            }
        ]
    }
];


class RouteWithSubRoutes extends React.Component{
    render (){
        console.log("RouteWithSubRoutes:", this.props)
        const route = this.props.routeData
        console.log(route)
        console.log(route.path)
        return (
            <Route path={route.path} render = {
                (props) => {
                    console.log('子route：', props)
                    return  <route.component routeData={route} myName="RouteWithSubRoutes"/>
                }
            }/>
        )
    }
}

class RouteConfigExample extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/henix">henix</Link></li>
                        <li><Link to="/kuler">kuler</Link></li>
                        <li><Link to="/daly">daly</Link></li>
                    </ul>
                    <hr/>
                    {
                        RouterConfig.map((route, i)=>{
                            console.log(i, route)
                            return (
                                <RouteWithSubRoutes key={i} routeData={route}/>
                            )
                        })
                    }
                </div>
            </Router>
        )
    }
}

export default  RouteConfigExample