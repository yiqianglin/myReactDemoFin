import React from 'react';
import ReactRouterDemo from './react-router-demo/AnimationExample01'
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