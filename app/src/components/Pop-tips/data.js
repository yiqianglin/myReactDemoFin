/**
 * Created by cc on 2017/4/5.
 */
class PopData {
    constructor({
        icon = '',
        msg = 'data默认数据',
        timeout = 2000,
        callback = null,
        show = false
    }){
        this.icon = icon;
        this.msg = msg;
        this.timeout = timeout;
        this.callback = callback;
        this.show = show;
    }
}

export default PopData;