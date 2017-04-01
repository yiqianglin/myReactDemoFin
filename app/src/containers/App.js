import React from 'react';

import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import NavBar from './../components/NavBar-top';
import LoginPanel from './../components/LoginPanel';
import IndexPage from './IndexPage';
import MyPage from './MyPage';



import _appcontainer from './../stylesheets/common/normalize.css';
import './../stylesheets/index.less';




class MaskLayer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const isShow = this.props.show
		return (
			isShow ? (
				<div className="MaskLayer" >
				</div>
			) : null
		)
	}
}

export default class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			maskLayerIsShow: false,
			loginPanelIsShow: false
		}
		this.maskLayerToggle = this.maskLayerToggle
		this.loginPanelToggle = this.loginPanelToggle.bind(this)
	}

	handler = {
		loginPanelIsShow: () => {
			console.log(this.refs.indexPage.props.component)
			this.loginPanelToggle();
		},
		closeLoginPanel : () => {
			this.loginPanelToggle()
		}
	}

	//使用babel-preset-stage-0则可以使用箭头函数替代bind修改this指向
	maskLayerToggle = () => {
		this.setState(prevState => ({
			maskLayerIsShow: !prevState.maskLayerIsShow
		}))
	}

	loginPanelToggle = () => {
		this.setState(prevState => ({
			loginPanelIsShow: !prevState.loginPanelIsShow
		}))
		this.maskLayerToggle()
		
	}



	render(){
		return(
			<div>
				<BrowserRouter>
					<div>
						<NavBar handler_loginPanelShow={this.handler.loginPanelIsShow}/>

						<MaskLayer show={this.state.maskLayerIsShow}/>
						<LoginPanel ref="loginPanel" show={this.state.loginPanelIsShow} closeLoginPanel={this.handler.closeLoginPanel}/>



						<Route path="/" exact render={() => <Redirect to='/IndexPage' />} />						
						<Route path="/IndexPage" component={IndexPage}  ref="indexPage"/>
						<Route path="/MyPage" component={MyPage}  />

					</div>
	        	</BrowserRouter>
        	</div>
		)
	}
}