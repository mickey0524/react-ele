import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import { Header,template} from './common/mixin';
import '../Style/baihao.less';


/**
 * (导出组件)
 * 
 * @export
 * @class Main
 * @extends {Component}
 */

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     age: this.props.baihao.age
        // }
        this.handleClick = () => {
            this.props.setBaihao('23');
            //this.setState({ age: '23' });
            console.log(this.props);
        }
    }
    render() {
        return (
            <div className="baihao">
              baihao
              <div>asd{this.props.baihao.age}</div>
              <button onClick={this.handleClick}>button</button>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

}


export default template({
    // id: 'helpCenter',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: ''
});
