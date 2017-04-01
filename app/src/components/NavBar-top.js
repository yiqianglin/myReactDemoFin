import React from 'react';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import './../stylesheets/components/NavBar-top.less';

class Navbar extends React.Component {
  render() {
    //const {isload, maxLoops} = this.props
    return (
    <div className="ban_top">
		<div className="con viewport">
			<div className="logo clearfix">
				<a className="viplogo" href="http://vip.xunlei.com/index.html?referfrom=pic" title="迅雷会员"></a>
			</div>
			<div className="menu">

				<ul className="menu-ul clearfix">
					<li data-index="1" className="cur">
						<Link to={'/IndexPage'} className="mid_link">首页</Link>
					</li>
					<li data-index="2">
						<Link to={'/MyPage'} className="mid_link">功能特权</Link>
					</li>
				    <li data-index="4">
				    	<a title="美女特权" className="mid_link" href="/vip_service/beauty/">美女特权</a>
				    </li>
				    <li data-index="5">
				        <a title="会员活动" className="mid_link" href="/vip_service/act/">会员活动</a>
				    </li>
			    	<li data-index="6">
			    		<a title="会员等级" className="mid_link" href="/vip_service/introduce/">会员等级</a>
			   		</li>
			    	<li data-index="7">
			    		<a title="超级会员" className="mid_link" href="/vip_service/supervip/?referfrom=v_pc_hygw_ggong_ad_navisvip">超级会员
			    		</a>
			    	</li>
				</ul>

			</div>
			<div className="top-right" onClick={this.props.handler_loginPanelShow}>
				<span className="unlogin"></span>
				<span className="username">立即登录</span>
			</div>

		</div>
	</div>
    );
  }
}



export default Navbar;
