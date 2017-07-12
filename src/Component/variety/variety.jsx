import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import template from '../common/template';     // 项目其他组件连接redux的桥梁
import mockData from './mock.json';            // mock数据，目前不打算写服务端，只是为了熟悉react
import './variety.less';


/**
 * index页面顶部商品品种
 */

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      varietyList: mockData.varietyList
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ul id="varietyList">
      {
        this.state.varietyList.map((item, index) => {
          return (
            <li key={index}>
              <img src={ item.imgUrl } />
              <p>{ item.name }</p>
            </li>
          )
        })
      }
      </ul>
    );
  }
}

export default template({
    // id: 'helpCenter',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: ''
});
