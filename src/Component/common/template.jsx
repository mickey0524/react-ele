import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import * as action from '../../Redux/Action/Index';


const Main = mySeting => {
    let setting = {
        id: '', //应用唯一id表示
        // url: '', //请求地址 目前不考虑写一个后台
        // data: {}, //发送给服务器的数据
        component: <div></div>, //数据回调给的组件
    };

    for (let key in mySeting) {
        setting[key] = mySeting[key];
    }

    class Index extends Component {
        static defaultProps = { setting }

        constructor(props, context) {
            super(props, context);
        }

        render() {
            return <this.props.setting.component {...this.props} />;
        }

        componentDidMount() {//获取数据
            if (this.props.setting.url) {
                this.props.fetchPosts(this.props.setting.url,this.props.setting.data);
            }
        }

        shouldComponentUpdate(nextProps, nextState) {
            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        }
    }

    //mapStateToProps and mapDispatchToProps
    return connect(state => { //将顶层组件与模版绑定后return回去，配置路由的时候用的就是和redux绑定的组件，所以其实每个路由匹配的都是同一个组件，只不过这个组件的内容不同
        let { bottomChoose, topBar, shopList, promptContent, addressList, userMes } = state;
        return {
            bottomChoose,
            topBar,
            shopList,
            promptContent,
            addressList,
            userMes
        }
    }, action)(Index); //连接redux
}


export default Main;