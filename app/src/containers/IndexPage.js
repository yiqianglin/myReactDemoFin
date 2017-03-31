import React from 'react';

import NavBar from './../components/NavBar-top';
import Banner from './../components/IndexPage-banner';
import Tab from './../components/IndexPage-tab';

import './../stylesheets/common/normalize.css';
import './../stylesheets/index.less';

export default class IndexPage extends React.Component{
	render(){
		return(
			<div className="wrapper">
				<div className="wrapper-bg"></div>
				<Banner/>
				<Tab selectedIndex="0"/>
			</div>
			
		)
	}
}