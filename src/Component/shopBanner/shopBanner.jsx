import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import mockData from './mockData.json';
import './shopBanner.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopMes: mockData
    }
  }

  render() {
    return (
      <div id="shopBanner">
        <div className="mask"></div>
        <div className="bg"></div>
        <div className="back-icon"></div>
        <div className="shop">
          <div className="shop-img">
            <img src={this.state.shopMes.shopImg} />
          </div>
          <div className="shop-mes">
            <p>{ this.state.shopMes.shopName }</p>
            <p>{ this.state.shopMes.shopService }</p>
            <p>{ this.state.shopMes.announcement }</p>
          </div>
          <div className="shop-detail">
            >
          </div>
        </div>
        <div className="shop-activity">
          <span>新</span>
          { this.state.shopMes.slogan }
          <span>{ this.state.shopMes.activityNum }个活动</span>
        </div>
      </div>
    )
  }
}

export default template({
  id: 'shopBanner',
  component: Main
});