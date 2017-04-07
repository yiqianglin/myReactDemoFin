import React from 'react';
import ReactRouterDemo from './react-router-api/BrowserRouter/demo01.js'
import './../stylesheets/MyPage.less';


export default class MyPage extends React.Component{
	render(){
		return(
			<div className="mypage-wrapper">
				<h1>路由控制</h1>
				<ReactRouterDemo/>
			</div>

		)
	}
}