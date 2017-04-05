/**
 * Created by cc on 2017/4/5.
 */
import React from 'react';
import '../../stylesheets/components/Pop-tips.less';

class PopTips extends React.Component{
    constructor(props){
        super(props)
/*        this.state = {
            icon:  '',
            msg: this.props.msg ? this.props.msg : '这是是默认的提示',
            callback: null,
            timeout: 2000,
            show: this.props.show ? true : false,
        }*/
    }

    render(){
        console.log('tips render')
        let popData = this.props.data
        return (
            <div className="pop-panel" style={{display: popData.show ? 'block' : 'none'}}>
            <div className="con">
                    <span className="icon"></span>
                    <span className="msg">{popData.msg}</span>
            </div>
            </div>
        )
    }

/*    componentDidUpdate(){
        let popData = this.props.data
        new Promise((resolve, reject)=> {
            setTimeout(resolve, popData.timeout);
        }).then(()=> {
            console.log('关闭tips')
            //this.props.handler_hidePopTips();
        });
    }*/
}

export default  PopTips;