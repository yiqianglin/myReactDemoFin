import React from 'react';

import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import NavBar from './../components/NavBar-top';
import IndexPage from './IndexPage';
import MyPage from './MyPage';



import _appcontainer from './../stylesheets/common/normalize.css';
import './../stylesheets/index.less'

export default class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
			<div>
 				<NavBar/>
				// <Link to={'/IndexPage'}>IndexPage</Link>
				<Route path="/" exact render={() => <Redirect to='/IndexPage' />} />
				
				<Route path="/IndexPage" component={IndexPage} />
				<Route path="/MyPage" component={MyPage} />

			</div>
        	</BrowserRouter>
		)
	}
}