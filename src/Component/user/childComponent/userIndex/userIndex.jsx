import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import BottomBar from '../../../common/bottomBar/bottomBar';
import Interval from '../../../common/interval/interval';
import Prompt from '../../../common/prompt/prompt';
import mockData from './mockData.json';
import { browserHistory, hashHistory } from 'react-router';
import './userIndex.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userMes: mockData
    }
    this.history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
    this.toOrder = () => {
      this.history.push('/order');
    }
    this.toAccount = () => {
      this.history.push('/user/account');
    }
    this.toBalance = () => {
      this.history.push('/user/balance');
    }
    this.toGiftMoney = () => {
      this.history.push('/user/giftMoney');
    }
    this.toIntegral = () => {
      this.history.push('/user/integral');
    }
    this.toMarket = () => {
      this.props.changePromptContent({ isShow: true, content: '暂时不开放积分商城' });
    }
    this.toVip = () => {
      this.history.push('/user/memberCard');
    }
  }

  render() {
    return(
      <div id="userIndex">
        <TopBar route={{path: 'user'}}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        <div className="user-container">
          <div className="account-mes" onClick={this.toAccount}>
            <div className="user-avatar">
              <img src={mockData.userAvatar} />
            </div>
            <div className="name-num">
              <p>{ this.props.userMes.userName }</p>
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
            <div className="user-balance" onClick={this.toBalance}>
              <p><span>{ mockData.balance }</span>元</p>
              <p>我的余额</p>
            </div>
            <div className="user-offer" onClick={this.toGiftMoney}>
              <p><span>{ mockData.offer }</span>个</p>
              <p>我的优惠</p>
            </div>
            <div className="user-integral" onClick={this.toIntegral}>
              <p><span>{ mockData.integral }</span>分</p>
              <p>我的积分</p>
            </div>
          </div>
          <Interval></Interval>
          <div className="ele-market">
            <div className="user-order" onClick={this.toOrder}><span></span><span>我的订单</span><span>></span></div>
            <div className="integral-market" onClick={this.toMarket}><span></span><span>积分商城</span><span>></span></div>
            <div className="ele-member" onClick={this.toVip}><span></span><span>饿了么会员卡</span><span>></span></div>
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
  id: 'userIndex',
  component: Main
})