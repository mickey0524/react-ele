import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import data from './mockData.json';
import './giftMoney.less';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="giftMoney">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="switch-label">
            <span className="active">红包</span>
            <span>商家代金券</span>
          </div>
          <div className="gift-wrapper">
            <div className="gift-desc">
              <span>有<span>{ data.giftList.length }</span>个红包即将到期</span>
              <span>红包说明</span>
              <span></span>
            </div>
            <ul className="gift-list">
            {
              data.giftList.map((item, index) => {
                return(
                  <li key={index}>
                    <div className="gift-mes">
                      <div className="gift-money">
                        <p><span>¥</span><span>{item.yuan}</span><span>.</span><span>{item.jiao}</span></p>
                        <p>满 {item.threshold} 元可用</p>
                      </div>
                      <div className="desc">
                        <p>分享红包<span>剩{item.day}日</span></p>
                        <p>{item.maturity}到期</p>
                        <p>限收货手机号为 {item.phone}</p>
                      </div>
                    </div>
                    { item.limit && <div className="limit">{ item.limit }</div> }
                  </li>
                );
              })
            }
            </ul>
          </div>
          <div className="bottom-label">
            <span>兑换红包</span>
            <span>推荐有奖</span>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'giftMoney',
  component: Main
})