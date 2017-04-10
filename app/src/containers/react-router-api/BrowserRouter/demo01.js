/**
 * Created by cc on 2017/4/7.
 */
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'


export default class Demo extends React.Component{

    getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message)
        callback(allowTransition)
    }

    render(){
        return(
            <BrowserRouter
                basename={'/'}
                forceRefresh={false}
                getUserConfirmation={this.getConfirmation.bind(this, '确认一下吧', function(){console.log('sss')})}
                keyLength={8}
            >
                <div>
                <Link to="/monday">monday</Link>
                    <br/>
                <Link to="/thusday">thusday</Link>
                    <br/>
                <Link to={{
                    pathname: '/courses',
                    search: '?sort=name',
                    hash: '#the-hash',
                    state: { fromDashboard: true }
                }}>other</Link>

                <Route path="/monday" render={() => <h1>monday</h1>}/>
                <Route path="/thusday" render={() => <h1>thusday</h1>}/>
                </div>
            </BrowserRouter>
        )
    }
}