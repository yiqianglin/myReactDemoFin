import React from 'react';
import './../stylesheets/components/IndexPage-tab.less';

class Tab extends React.Component{
	constructor(props) {
		super(props);
		//默认选中
		this.state = { index: 0 };
	}
	handleClick(index) {
		console.log("index:", index+1);
	}
	assembleClassName(commonName, dynamicName, index){
		return commonName + dynamicName + index > 9 ? index : ("0" + index);
	}
	render(){
		const data = [
			{id: "1", tit: '每日领钱', txt: '会员专享免费领', newMark: true},
			{id: "2", tit: '福利券', txt: '生活福利领不停', newMark: true},
			{id: "3", tit: '兑换', txt: '迅雷积分兑换', newMark: true},
			{id: "4", tit: '活动', txt: '会员专享免费领', newMark: true},
			{id: "5", tit: '打卡', txt: '连续打卡领好礼', newMark: true},
		];
		return(
		/*注释一*/
		//注释二
			<div className="wrapper">
				<div className="mission_wp viewport">
					<ul className="items clearfix">
						{data.map((item, index) => {
/*							var tabItemClass = classNames({
						      'icon': true
						      'btn-pressed': this.state.isPressed,
						      'btn-over': !this.state.isPressed && this.state.isHovered
						    });*/
						 	return <li className="item" onClick={this.handleClick.bind(this, index)} key={item.id}>
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
						{/*
						<li className="item" onClick={this.handleClick.bind(this)}>
							<a href="javascript:void(0);" className="tab-href">
								<span className="icon icon-01"></span>
								<span className="cont">
									<span className="tit">每日领钱</span>
				                    <span className="txt">会员专享免费领</span>
								</span>
								<i className="mark_new">new</i>
							</a>
						</li>
						<li className="item" onClick={this.handleClick.bind(this)}>
							<a href="javascript:void(0);" className="tab-href">
								<span className="icon icon-02"></span>
								<span className="cont">
									<span className="tit">每日领钱</span>
				                    <span className="txt">会员专享免费领</span>
								</span>
								<i className="mark_new">new</i>
							</a>
						</li>
						<li className="item" onClick={this.handleClick.bind(this)}>
							<a href="javascript:void(0);" className="tab-href">
								<span className="icon icon-03"></span>
								<span className="cont">
									<span className="tit">每日领钱</span>
				                    <span className="txt">会员专享免费领</span>
								</span>
								<i className="mark_new">new</i>
							</a>
						</li>
						<li className="item clicked" onClick={this.handleClick.bind(this)}>
							<a href="javascript:void(0);" className="tab-href">
								<span className="icon icon-04"></span>
								<span className="cont">
									<span className="tit">每日领钱</span>
				                    <span className="txt">会员专享免费领</span>
								</span>
								<i className="mark_new">new</i>
							</a>
						</li>
						<li className="item" onClick={this.handleClick.bind(this)}>
							<a href="javascript:void(0);" className="tab-href">
								<span className="icon icon-05"></span>
								<span className="cont">
									<span className="tit">每日领钱</span>
				                    <span className="txt">会员专享免费领</span>
								</span>
								<i className="mark_new">new</i>
							</a>
						</li>
					*/}
					</ul>
				</div>	
				<div className="mission_cont viewport">
					<div className="">
						content 1
					</div>
					<div className="">
						content 2
					</div>
					<div className="">
						content 3
					</div>
					<div className="">
						content 4
					</div>
					<div className="">
						content 5
					</div>
					<div className="">
						content 6
					</div>
				</div>
			</div>
		)
	}
};

export default Tab;