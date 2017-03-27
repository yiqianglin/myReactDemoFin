import React from 'react';
import './../stylesheets/components/IndexPage-banner.less';

class Banner extends React.Component {
  render() {
    return (
		<div className="carousel viewport">
			<ul id="carousel" className="clearfix">
				<li className="">
	            	<a className="img_wp" target="_blank" href="javascript:void(0);" /*ondragstart="return false;"*/>
	                	<img alt="会员特权" src="http://img.vip.kanimg.com/img/banner/201703251147053971.png"/>
	            	</a>
	        	</li>
	        	<li className="">
	            	<a className="img_wp" target="_blank" href="javascript:void(0);" /*ondragstart="return false;"*/>
	                	<img alt="年费专区" src="http://img.vip.kanimg.com/img/banner/201701171746265643.png"/>
	            	</a>
	        	</li>
	        	<li  className="">
	            	<a className="img_wp" target="_blank" href="javascript:void(0);" /*ondragstart="return false;"*/>
	                <img alt="金融超市" src="http://img.vip.kanimg.com/img/banner/201703101839375654.png"/>
	            	</a>
	        	</li>
	        	<li className="">
		             <a className="img_wp" target="_blank" href="javascript:void(0);" /*ondragstart="return false;"*/>
		                <img alt="会员专享" src="http://img.vip.kanimg.com/img/banner/201703221654552460.png"/>
		            </a>
	        	</li>
	        	<li className="on">
		             <a className="img_wp" target="_blank" href="javascript:void(0);" /*ondragstart="return false;"*/>
		                <img alt="迅雷会员" src="http://img.vip.kanimg.com/img/banner/201703241822464164.png"/>
		            </a>
	        	</li>
	        </ul>
			<div className="pic_guide">
				<i className="dot off" >会员特权</i>
				<i className="dot on" >年费专区</i>
				<i className="dot off" >金融超市</i>
				<i className="dot off" >会员专享</i>
				<i className="dot off" >会员福利</i>
			</div>
		</div>
    );
  }
}



export default Banner;
