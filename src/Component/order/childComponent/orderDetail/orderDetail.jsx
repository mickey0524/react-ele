import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Interval from '../../../common/interval/interval';
import './orderDetail.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.foodList = [
      {
        name: '汉堡包',
        number: 1,
        price: 20
      },
      {
        name: '汉堡包',
        number: 1,
        price: 20
      }
    ]
  }

  render() {
    return (
      <div id="orderDetail">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="order-title">
            <img src="http://images.cangdu.org/aaa.jpeg" />
            <p>支付超时</p>
            <span className="order-again">再来一单</span>
          </div>
          <Interval></Interval>
          <div className="order-mes">
            <div className="shop">
              <img src="http://images.cangdu.org/aaa.jpeg" />
              <span>商家名称</span>
              <span>></span>
            </div>
            <ul className="food-list">
            {
              this.foodList.map((item, index) => {
                return(
                  <li key={index}>
                    <span className="food-name">{item.name}</span>
                    <span className="food-num">X{item.number}</span>
                    <span className="food-price">¥{item.price}</span>
                  </li>
                );
              })
            }
            </ul>
            <div className="delivery">
              配送费<span>4</span>
            </div>
            <div className="all-money">实付233.00</div>
          </div>
          <Interval></Interval>
          <div className="delivery-mes">
            <header>配送信息</header>
            <section>
              <div className="left">送达时间：</div>
              <div className="right">
                <p>尽快送达</p>
              </div>
            </section>
            <section>
              <div className="left">送货地址：</div>
              <div className="right">
                <p>1</p>
                <p>1231231231</p>
              </div>
            </section>
            <section>
              <div className="left">配送方式：</div>
              <div className="right">
                <p>蜂鸟专送</p>
              </div>
            </section>
          </div>
          <Interval></Interval>
          <div className="order-detail">
            <header>配送信息</header>
            <section>
              <div className="left">订单号：</div>
              <div className="right">
                <p>809</p>
              </div>
            </section>
            <section>
              <div className="left">支付方式：</div>
              <div className="right">
                <p>在线支付</p>
              </div>
            </section>
            <section>
              <div className="left">下单时间：</div>
              <div className="right">
                <p>2017-07-16 21:43</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'orderDetail',
  component: Main
})