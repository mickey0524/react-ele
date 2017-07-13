import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import template from '../common/template';     // 项目其他组件连接redux的桥梁
import mockData from './mock.json';            // mock数据，目前不打算写服务端，只是为了熟悉react
import './shopList.less';

/**
 * index页面种类下面商家的滚动列表
 */

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="shopList">
        <img src="../../images/demo.png" />
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}

export default template({
  component: Main
});