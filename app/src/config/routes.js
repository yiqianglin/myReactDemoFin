import Home from './../containers/IndexPage';
import MyPage from './../containers/MyPage';
import React, {Component} from 'react';
// import { BrowserRouter, HashRouter, Match, Router, Route, Redirect } from 'react-router';
import { BrowserRouter, Link, Route, Redirect } from 'react-router'

// const Search = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('containers/Search/search').default)
//     },'search')
// }


export default class extends Component {
    render() {
        return (

			    <BrowserRouter>
			    	<div>
			    	<Link to={'/'}>page1</Link>
                	<Link to={'/my'}>page2</Link>
/*			            <Match exactly pattern="/" component={MyPage} />
			            <Match pattern="/my" component={MyPage} />*/
			            {/*在这里添加你的Route*/}

			            <Route path="/" component={Page1} />
			            <Route path="/my" component={Page2} />
			        </div>
			    </BrowserRouter>
        )
    }
}