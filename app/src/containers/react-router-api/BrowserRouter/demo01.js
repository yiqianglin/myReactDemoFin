/**
 * Created by cc on 2017/4/7.
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


export default class Demo extends React.Component{

    getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message)
        callback(allowTransition)
    }

    render(){
        return(
            <BrowserRouter
                basename={"optionalString"}
                forceRefresh={true}
                getUserConfirmation={this.getConfirmation.bind(this, '确认一下吧', function(){console.log('sss')})}
                keyLength={8}
            >
                <Link to="/monday">monday</Link>
                <Link to="/thusday">thusday</Link>

                <Route path="/monday" render={() => <h3>monday</h3>}/>
                <Route path="/thusday" render={() => <h3>thusday</h3>}/>
                <div>skdfjkdjfk</div>
            </BrowserRouter>
        )
    }
}