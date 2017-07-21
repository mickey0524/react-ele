import React, { Component, ProtoType } from 'react';
import template from '../../../common/template';
import data from './mockData.json';
import TopBar from '../../../common/topBar/topBar';
import Interval from '../../../common/interval/interval';
import './shopDetail.less';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="shopDetail">
        <TopBar route={this.props.route}></TopBar>
        <div className="shopDetail-container">
          <Interval></Interval>
          <div className="activity">
            <p>活动与属性</p>
            <ul>
            {
              data.shopActivity.map((item, index) => {
                return(
                  <li key={index}>
                  { item.variety === 'new' && <span className="new">新</span> }
                  { item.variety === 'subtraction' && <span className="subtraction">减</span> }
                  { item.variety === 'special' && <span className="special">特</span> }
                  { item.variety === 'discount' && <span className="discount">折</span> }
                  { item.slogan }
                  </li>
                );
              })
            }
            </ul>
          </div>
          <Interval></Interval>
          <div className="shop-mes">
            <p>商家信息</p>
            <div className="shop-name">{ data.shopName }</div>
            <div className="shop-address">地址：{ data.shopAddress }</div>
            <div className="open-time">营业时间：{ data.openTime }</div>
          </div>
        </div>
        <Interval></Interval>
      </div>
    );
  }
}

export default template({
  id: 'shopDetail',
  component: Main
})