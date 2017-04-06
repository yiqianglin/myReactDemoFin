import React from 'react';

import Banner from './../components/IndexPage-banner';
import Tab from './../components/IndexPage-tab';


import './../stylesheets/common/normalize.css';
import './../stylesheets/index.less';


export default class IndexPage extends React.Component{
	constructor(props){
		super(props);

	}


	render(){
        console.log('IndexPage render')
		return(
			<div className="wrapper">
				<div className="wrapper-bg"></div>
				<Banner/>
				<Tab selectedIndex="0"/>

				
			</div>
			
		)
	}

    shouldComponentUpdate(nextProps) {
		console.log('shouldComponentUpdate:',nextProps);
		console.log(this.props)
		console.log(this.props == nextProps)
        if (this.props == nextProps){
        	return false
		}
		return true
    }
}