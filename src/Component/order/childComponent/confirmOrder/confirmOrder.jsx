import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Interval from '../../../common/interval/interval';
import { browserHistory, hashHistory } from 'react-router';
import './confirmOrder.less';

class Main extends Component {
  constructor(props) {
    super(props);
    let addressList = this.props.addressList;
    let curAddress = '';
    addressList.forEach((item) => {
      if (item.isActive) {
        curAddress = item;
        return false;
      }
    })
    this.state = {
      curAddress,
      curPayWay: '在线支付'
    }
    this.editAddress = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/user/address');
    }
    this.showPayway = () => {
      this.refs.mask.style.display = 'block';
      this.refs.payway.classList.add('active');
    }
    this.onClickMask = () => {
      this.refs.mask.style.display = 'none';
      this.refs.payway.classList.remove('active');
    }
    this.onSectionClick = (ev) => {
      if (ev.target.nodeName === 'SECTION') {
        Array.from(ev.currentTarget.children).forEach((item) => {
          item.classList.remove('active');
        });
        ev.target.classList.add('active');
        this.setState({ curPayWay: ev.target.textContent.slice(0, -1) });
      }
    }
  }

  render() {
    return(
      <div id="confirmOrder">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="address-container" onClick={this.editAddress}>
            <span className="bg"></span>
            <div className="address-info">
              <p><span>{this.props.userMes.userName}</span> 先生 {this.state.curAddress.phoneNum}</p>
              <p>{this.state.curAddress.address}</p>
            </div>
            <span>></span>
          </div>
          <Interval></Interval>
          <div className="delivery-time">
            <span>送达时间</span>
            <div className="delivery-feature">
              <p>尽快送达 | 预计 11:43</p>
              <p>蜂鸟专送</p>
            </div>
          </div>
          <Interval></Interval>
          <div className="pay-container">
            <div className="pay-way" onClick={this.showPayway}>
              支付方式<span>{this.state.curPayWay} ></span>
            </div>
            <div className="gift-money">
              红包<span>暂时只在饿了么 APP 中支持</span>
            </div>
          </div>
          <Interval></Interval>
          <div className="order-detail">
            <div className="order-title">
              <img src="http://images.cangdu.org/aaa.jpeg" />
              <span>商家名称</span>
            </div>
            <div className="order-info">
              <div><span>data</span><span>x 1</span><span>¥20</span></div>
              <div><span>餐盒</span><span>x 1</span><span>¥202</span></div>
              <div><span>配送费</span><span>x 1</span><span>¥4</span></div>
            </div>
            <div className="order-money">
              <div className="left">订单¥1859</div>
              <div className="right">
                <p>待支付</p>
                <p>¥1859</p>
              </div>
            </div>
          </div>
          <Interval></Interval>
          <div className="order-choose">
            <div className="order-remarks">订单备注<span>少点辣 ></span></div>
            <div className="invoice">发票抬头<span>不需要开发票 ></span></div>
          </div>
        </div>
        <div className="pay-way">
          <div className="mask" ref="mask" onClick={this.onClickMask}></div>
          <div className="payway-container" ref="payway" onClick={this.onSectionClick}>
            <header>支付方式</header>
            <section className="active">在线支付<span>✓</span></section>
            <section>货到付款<span>✓</span></section>
          </div>
        </div>
        <div className="bottom-bar">
          <span>待支付 ¥1869</span>
          <span>确认下单</span>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'confirmOrder',
  component: Main
})