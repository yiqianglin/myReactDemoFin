import React from 'react';

import { BrowserRouter, Link, Route, Redirect, HashRouter} from 'react-router-dom'
import NavBar from './../components/NavBar-top';
import LoginPanel from './../components/LoginPanel';
import IndexPage from './IndexPage';
import MyPage from './MyPage';
import {PopTips, PopData} from '../components/Pop-tips/index';



import './../stylesheets/common/normalize.css';
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
			loginPanelIsShow: false,
			popData: new  PopData({})
		}

/*		this.maskLayerToggle = this.maskLayerToggle
		this.loginPanelToggle = this.loginPanelToggle.bind(this)*/
	}

	handler = {
		loginPanelIsShow: () => {
			//console.log(this.refs.indexPage.props.component)
			this.loginPanelToggle();
		},
		closeLoginPanel : () => {
			this.loginPanelToggle()
		},
		showPopTips: (data) => {
		    console.log('====showPopTips====')
			let popData = new PopData({...data, show: true});
			this.setState({popData: popData})
            //定时关闭
            new Promise((resolve, reject)=> {
                setTimeout(resolve, popData.timeout);
            }).then(()=> {
                console.log('关闭tips')
                this.setState({popData: new PopData({})})
            });
		},
		hidePopTips: (data) => {
            console.log('====hidePopTips====')
            let popData = {...data, show: false};
            this.setState({popData: new PopData(popData)})
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
                {this.state.popData.show ?(
                    <PopTips data={this.state.popData}
                             handler_hidePopTips={this.handler.hidePopTips}
                    />
                ): null}

                {this.state.maskLayerIsShow ?(
                    <MaskLayer show={this.state.maskLayerIsShow}/>
                ): null}

                {this.state.loginPanelIsShow ?(
                    <LoginPanel ref="loginPanel" show={this.state.loginPanelIsShow}
                                closeLoginPanel={this.handler.closeLoginPanel}
                                handler_showPopTips={this.handler.showPopTips}
                    />
                ): null}

				<BrowserRouter>
				{/*<HashRouter>*/}
					<div>
						<NavBar handler_loginPanelShow={this.handler.loginPanelIsShow} />
						<Route path="/" exact render={() => <Redirect to='/IndexPage' />} />
						<Route path="/IndexPage" component={IndexPage}  ref="indexPage"/>
						<Route path="/MyPage" component={MyPage}  />

					</div>
				{/*</HashRouter>*/}
	        	</BrowserRouter>
        	</div>
		)
	}
}