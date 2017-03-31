import React from 'react';

import NavBar from './../components/NavBar-top';
import Banner from './../components/IndexPage-banner';
import Tab from './../components/IndexPage-tab';

import './../stylesheets/common/normalize.css';
import './../stylesheets/index.less';

export default class MyPage extends React.Component{
	render(){
		return(
			<div className="wrapper">
				<div>我的页面</div>
			</div>
			
		)
	}
}