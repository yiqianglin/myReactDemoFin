import React from 'react';
import './../stylesheets/components/LoginPanel.less';

class LoginPanel extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
            loginStatus: {
			    logined: false,
                loginType: 'username_password', //phone_captcha
                username: '',
                password: '',
                phone: '',
                captcha: '',
                autoLogin: true,
            }
		}
	}

	changeLoginType = (event) => {
        let state = this.state.loginStatus
        state.loginType = event.target.id
        this.setState({loginStatus:state});
    }

	validator = {
        captcha: {
            uncomplete: /^[A-Za-z\d]{0,4}$/,
            complete: /^[A-Za-z\d]{4}$/,
        },
        username: {
            complete: /^\w{6,12}$/
        },
        password: {
            complete: /^[.]{6,12}$/
        }
    }

    formInputHandler = {
        username: (event) => {
            let state = this.state.loginStatus
            state.username = event.target.value
            this.setState({loginStatus:state});
        },
        password: (event) => {
            let state = this.state.loginStatus
            state.password = event.target.value
            this.setState({loginStatus:state});
        },
        captcha: (event) => {
            let value = event.target.value;
            if(value.length < 4){
                if(!this.validator.captcha.uncomplete.test(value)){
                    console.log(value)
                    return false;
                }
            }else{
                if(!this.validator.captcha.complete.test(value)){
                    console.log(value)
                    return false;
                }
            }
            let state = this.state.loginStatus;
            state.captcha = value;
            this.setState({captcha:state});
        },
        autoLogin: (event) => {
            console.log(this.state.loginStatus.autoLogin)
            this.setState((prevState) => {
                let state = prevState.loginStatus
                state.autoLogin = !state.autoLogin
                console.log('newstate:', state.autoLogin)
                return {loginStatus:state}
            });
        },
        common: (event) => {
            let state = this.state.loginStatus,
                 name = event.target.name;
            state[name] = event.target.value;
            this.setState({name: state});
            console.log(this.state.loginStatus)
        }
    }

    submitHandler = {
        username_password: (event) => {
            console.log(this.state.loginStatus.logined)
            console.log(this.state.loginStatus.loginType)
            console.log(this.state.loginStatus.username)
            console.log(this.state.loginStatus.password)
            console.log(this.state.loginStatus.phone)
            console.log(this.state.loginStatus.captcha)
            console.log(this.state.loginStatus.autoLogin)
            if(!this.validator.username.complete.test(this.state.loginStatus.username)){
                console.log('用户名不通过')
                this.props.handler_showPopTips({
                    msg: '请输入正确的用户名'
                });
            }
        }
    }


	render(){
        console.log('LoginPannle render')
		const isShow = this.props.show
		return (
			isShow ? (
				<div className="pop_box pop_login" id="login-pop">
				    <div className="pop_box_wp">
				        <div className="p_b_bd ">
				            <div className="img_logo_wp">
				                <img src="http://img.vip.kanimg.com/n_vip_7/img-y16/base/logo_hd_w_2x.png" alt="" />
				            </div>
				            <div className="login_ifr" id="xl_login">

				            </div>
				        </div>
				        <a id="log_close" className="p_b_close" title="关闭" href="javascript:void(0);" onClick={this.props.closeLoginPanel}>关闭</a>
			        


<div id="xls_quick_login" className="xls_box">
  <div className="t_boxc">
    {/*--登录--*/}
    <div id="login_box" className="tb_wpb">
      <div className="hd">
        <h3>
          <a id="username_password" href="javascript:void(0)" className={this.state.loginStatus.loginType=="username_password"?"on":null} onClick={this.changeLoginType}>帐号登录</a>
          <a id="phone_captcha" href="javascript:void(0)" className={this.state.loginStatus.loginType=="phone_captcha"?"on":null} onClick={this.changeLoginType}>短信登录</a></h3>
      </div>
      <div className="bd bd_bg">
        {/*--普通登录--*/}
        <div className={`input_area ${this.state.loginStatus.loginType=="username_password" ? 'show' : 'hide'}`} id="account_login">
          <form action="" className="form_logoin">
            <div className="in_box">
              <label id="al_u_l" htmlFor="al_u" style={{display: this.state.loginStatus.username ? 'none' : 'block'}}>请输入迅雷帐号</label>
              <input type="text" value={this.state.loginStatus.username} onChange={this.formInputHandler.common} className="in_txt" id="al_u" name="username"/></div>
            <div className="in_box">
              <label id="al_p_l" htmlFor="al_p" style={{display: this.state.loginStatus.password ? 'none' : 'block'}}>密码</label>
              <input type="password" value={this.state.loginStatus.password} onChange={this.formInputHandler.common} className="in_txt" id="al_p" name="password"/></div>
            <div className="in_box in_boxa"    id="al_c_div">
              <label id="al_c_l" htmlFor="al_c" style={{display: this.state.loginStatus.captcha ? 'none' : 'block'}}>请输入验证码</label>
              <input type="text" value={this.state.loginStatus.captcha} onChange={this.formInputHandler.captcha} className="in_txt" id="al_c" name="captcha"/>
              <div href="javascript:void(0)" title="验证码" className="verify_img">
                <img id="al_c_img"  src="" alt=""/></div>
            </div>
            <div className="in_box in_boxa" style={{display:'block'}}>
              <label id="al_remember_div" htmlFor="al_remember" className="cbox">
                <input type="checkbox" id="al_remember" name="" className="chk" checked={this.state.loginStatus.autoLogin} onChange={this.formInputHandler.autoLogin}/>下次自动登录</label>
              <a href="http://aq.xunlei.com/password_find.html" title="忘记密码？" target="_blank" className="text_cite">忘记密码？</a></div>
            <div className="pay_btn">
              <a id="al_submit" className="" title="登录" href="javascript:void(0)" onClick={this.submitHandler.username_password}>登录</a></div>
          </form>
        </div>
        {/*--手机登录--*/}
        <div className={`input_area ${this.state.loginStatus.loginType=="phone_captcha" ? 'show' : 'hide'}`} id="mobile_login">
          <form action="" className="form_logoin" id="pl_form">
            <p className="in_box_cite color_red" style={{display:'none'}} id="ml_warn"></p>
            <div className="in_box pl_hide_for_sms_captcha">
              <label id="ml_m_l" htmlFor="ml_m">常用手机号</label>
              <input type="text" value="" className="in_txt" id="ml_m"/></div>
            <div className="in_box in_boxa pl_hide_for_sms_captcha" style={{display:'block'}}>
              <label id="ml_c_l" htmlFor="ml_c">短信验证码</label>
              <input type="text" value="" className="in_txt" id="ml_c"/>
              <a href="javascript:void(0)" title="获取验证码" className="verify_btn" id="ml_gc">获取验证码</a></div>
            <div className="in_box in_boxa" style={{display:'none'}} id="pl_c_div">
              <label id="pl_c_l" htmlFor="pl_c">输入验证码</label>
              <input type="text" value="" className="in_txt" id="pl_c"/>
              <a href="javascript:void(0)" title="" className="verify_img">
                <img id="pl_c_img" height="44" width="112" src="" alt=""/></a>
              <p style={{display:'block', 'fontSize': '11px', 'paddinTop': '5px'}}>出于安全考虑，请输入上图中字符并验证</p>
              <div className="pay_btn">
                <a id="pl_gc" className="" title="确定">确定</a></div>
            </div>
            <div className="in_box in_boxa pl_hide_for_sms_captcha" style={{display:'block'}}>
              <label id="ml_remember_div" htmlFor="ml_remember" className="cbox">
                <input type="checkbox" id="ml_remember" name="" className="chk" defaultChecked/>下次自动登录</label>
              <a href="http://aq.xunlei.com/password_find.html" title="忘记密码？" target="_blank" className="text_cite">忘记密码？</a></div>
            <div className="pay_btn pl_hide_for_sms_captcha">
              <a id="ml_submit" className="" title="登录" href="javascript:void(0)">登录</a></div>
          </form>
        </div>
    </div>
      {/*--第三方帐号登录--*/}
      <div className="tl_t" style={{padding: '0px 28px'}}>
        <div className="other_login_wp" id="tl_div_t">
          <span className="tit">其他登录</span>
          <div className="other_login" id="tl_icons_t">
            <a id="icon_qq" title="QQ" className="login_img" target="_blank" href="http://login.i.xunlei.com/connect_login.php?connect=qq&amp;redirect_url=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">
              <img id="img_qq" alt="QQ" src="http://i.xunlei.com/login/img/icon_third/new/qq.png"/></a>
            <a id="icon_weixin" title="微信" className="login_img" target="_blank" href="http://login.i.xunlei.com/tl/weixin_pc?redirect=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">
              <img id="img_weixin" alt="微信" src="http://i.xunlei.com/login/img/icon_third/new/weixin.png"/></a>
            <a id="icon_sina" title="新浪微博" className="login_img" target="_blank" href="http://login.i.xunlei.com/connect_login.php?connect=weibo&amp;redirect_url=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">
              <img id="img_sina" alt="新浪微博" src="http://i.xunlei.com/login/img/icon_third/new/sina.png"/></a>
            <a id="icon_alipay" title="支付宝" className="login_img" target="_blank" href="http://login.i.xunlei.com/connect_login.php?connect=zfb&amp;redirect_url=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">
              <img id="img_alipay" alt="支付宝" src="http://i.xunlei.com/login/img/icon_third/new/alipay.png"/></a>
          </div>
          <div className="other_login2" id="tl_icons2_t" style={{display:'none'}}>
            <a id="icon_xiaomi" title="小米" className="login_link" target="_blank" href="https://open-api-auth.xunlei.com/platform?m=BindOauth&amp;redirect_uri=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">小米</a>
            <span className="d_line">|</span>
            <a id="icon_aq360" title="360" className="login_link" target="_blank" href="http://login.i.xunlei.com/connect_login.php?connect=360&amp;redirect_url=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">360</a>
            <span className="d_line">|</span>
            <a id="icon_renren" title="人人网" className="login_link" target="_blank" href="http://login.i.xunlei.com/connect_login.php?connect=renren&amp;redirect_url=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">人人网</a>
            <span className="d_line">|</span>
            <a id="icon_tianyi" title="天翼" className="login_link" target="_blank" href="http://login.i.xunlei.com/thirdlogin3/tianyi.php?redirect=http%3A%2F%2Fvip.xunlei.com%2Findex.html%3Freferfrom%3Dpic">天翼</a></div>
          <a href="javascript:;" className="link_more" id="tl_arrow___t">更多
            <i className="ico_more"></i></a>
        </div>
      </div>
      {/*--第三方帐号登录end--*/}</div>
  </div>
</div>


				    </div>
				</div>	
				) : null
	
		)
	}
};

export default LoginPanel;