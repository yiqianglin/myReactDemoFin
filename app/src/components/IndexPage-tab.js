import React from 'react';
import './../stylesheets/components/IndexPage-tab.less';

class Tab extends React.Component{
	constructor(props) {
		super(props);
		//默认选中
		this.state = { index: 1 };
	}
	handleClick(index, e) {
		this.setState({index: index+1});
		console.log("index:", index+1, this.state.index);

	}
	assembleClassName(commonName, dynamicName, index){
		return commonName + dynamicName + index > 9 ? index : ("0" + index);
	}
	render(){
		const data = [
			{id: "1", tit: '每日领钱', txt: '会员专享免费领', newMark: true, content: 'tab-content-01'},
			{id: "2", tit: '福利券', txt: '生活福利领不停', newMark: true, content: 'tab-content-02'},
			{id: "3", tit: '兑换', txt: '迅雷积分兑换', newMark: true, content: 'tab-content-03'},
			{id: "4", tit: '活动', txt: '会员专享免费领', newMark: true, content: 'tab-content-04'},
			{id: "5", tit: '打卡', txt: '连续打卡领好礼', newMark: true, content: 'tab-content-05'},
		];
		var tab_content = "tab-content-" + (this.state.index > 9 ? this.state.index : `0${this.state.index}`)
		console.log(tab_content)
		return(
		/*注释一*/
		//注释
			<div className="wrapper">
				<div className="mission_wp viewport">
					<ul className="items clearfix">
						{data.map((item, index) => {
/*							var tabItemClass = classNames({
						      'icon': true
						      'btn-pressed': this.state.isPressed,
						      'btn-over': !this.state.isPressed && this.state.isHovered
						    });*/
						 	return <li className={`item ${this.state.index == (index+1) ? 'clicked' : ''}`} onClick={this.handleClick.bind(this, index)} key={item.id}>
								<a href="javascript:void(0);" className="tab-href">
									<span className={`icon icon-0${index+1}`}></span>
									<span className="cont">
										<span className="tit">{item.tit}</span>
					                    <span className="txt">{item.txt}</span>
									</span>
									<i className="mark_new">new</i>
								</a>
							</li>
						}
						)}
					</ul>
				</div>	
				<div className="mission_cont viewport">
					<div className={`tab-content ${"tab-content-01" == tab_content ? "show" : ""}`}>
						<div className="cashback_left">
						    {/*.down:钱币掉落动画；.up:钱币出现动画*/}
						    <span className="coin up" id="balance">0.00</span>
						    <div className="cont">
						       <p className="tit" id="cash-tip">今日可领<span className="money"><em>0.05</em>元</span> </p>
						      {/*<span className="txt">续费会员首周每日<a href="#">3倍收益&gt;</a></span>*/}
						       <span className="txt" id="purchase-tip">亲，您还没有登录，<a href="javascript:void(0)" className="login">点击登录&gt;</a></span>
						      {/*.unlogin:未登录态，没有 收货地址 和 领取记录 链接*/}
						      <div className="btn_wp">
						        {/*未打卡按钮*/}
						        <a href="javascript:;" id="get-cash-btn" className="btn_red get-cash">立即领钱</a>
						        <div className="tip">
						          <a data-url="http://dyactive2.vip.xunlei.com/iface/?action=getBanceLog&amp;actid=vip2016index" className="act_prizelist" href="javascript:void(0)">领取记录</a> <span className="line">|</span> <a id="lqgz" href="javascript:void(0)">领取规则</a>
						            <div className="ico_tip_wp">
						              <i className="ico_tip"></i>
						              <div className="pop_tip">
						                <dl>
						                  <dt>会员特权</dt>
						                  <dd>1. 年费会员每日可领<span className="c_red">0.05元</span>非年费会员每日可领<span className="c_red">0.01元</span></dd>
						                  <dd>2. 新会员用户开通首月可领<br/><span className="c_red">5倍</span></dd>
						                  <dd>3. 会员续费首周<span className="c_red">可领3倍</span></dd>
						                  <dd>4. 会员每周五可领<span className="c_red">双倍金额</span></dd>
						                  <dd>5. 新开通及续费可<span className="c_red">叠加领取</span></dd>
						                </dl>
						              </div>
						            </div>
						        </div>
						      </div>
						    </div>
						  </div>
					</div>
					<div className={`tab-content ${"tab-content-02" == tab_content ? "show" : ""}`}>
						content 2
					</div>
					<div className={`tab-content ${"tab-content-03" == tab_content ? "show" : ""}`}>
						content 3
					</div>
					<div className={`tab-content ${"tab-content-04" == tab_content ? "show" : ""}`}>
						content 4
					</div>
					<div className={`tab-content ${"tab-content-05" == tab_content ? "show" : ""}`}>
						content 5
					</div>
				</div>
			</div>
		)
	}
};

export default Tab;