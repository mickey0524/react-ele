import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import { browserHistory, hashHistory } from 'react-router';
import mockData from './mockData.json';
import './shopBanner.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopMes: mockData
    }
    this.toActivityDetail = (ev) => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/shop/activityDetail');
    }
    this.toShopDetail = (ev) => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/shop/shopDetail');
    }
    this.back = (ev) => {
      window.history.back();
    }
  }

  render() {
    return (
      <div id="shopBanner">
        <div className="mask"></div>
        <div className="bg"></div>
        <div className="back-icon" onClick={this.back}></div>
        <div className="shop" onClick={this.toShopDetail}>
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
        <div className="shop-activity" onClick={this.toActivityDetail}>
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