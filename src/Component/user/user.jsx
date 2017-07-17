import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import TopBar from '../topBar/topBar';
import BottomBar from '../bottomBar/bottomBar';
import Interval from '../interval/interval';
import mockData from './mockData.json';
import './user.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userMes: mockData
    }
  }

  render() {
    return(
      <div id="user">
        <TopBar route={this.props.route}></TopBar>
        <div className="user-container">
          <div className="account-mes">
            <div className="user-avatar">
              <img src={mockData.userAvatar} />
            </div>
            <div className="name-num">
              <p>{ mockData.userName }</p>
              {
                mockData.phoneNum.length === 0 ? (
                  <p><span></span>暂无绑定手机号</p>
                ) : (
                  <p><span></span>{ mockData.phoneNum }</p>
                )
              }
            </div>
            <span>></span>
          </div>
          <div className="user-fraction">
            <div className="user-balance">
              <p><span>{ mockData.balance }</span>元</p>
              <p>我的余额</p>
            </div>
            <div className="user-offer">
              <p><span>{ mockData.offer }</span>个</p>
              <p>我的优惠</p>
            </div>
            <div className="user-integral">
              <p><span>{ mockData.integral }</span>分</p>
              <p>我的积分</p>
            </div>
          </div>
          <Interval></Interval>
          <div className="ele-market">
            <div className="user-order"><span></span><span>我的订单</span><span>></span></div>
            <div className="integral-market"><span></span><span>积分商城</span><span>></span></div>
            <div className="ele-member"><span></span><span>饿了么会员卡</span><span>></span></div>
          </div>
          <Interval></Interval>
          <div className="ele-service">
            <div className="service-center"><span></span><span>服务中心</span><span>></span></div>
            <div className="download-ele"><span></span><span>下载饿了么APP</span><span>></span></div>
          </div>
        </div>
        <BottomBar></BottomBar>
      </div>
    );
  }
}

export default template({
  id: 'user',
  component: Main
})