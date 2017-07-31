import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import './exchangeCard.less'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isButtonActive: false };
    this.tipList = [ '新兑换的会员服务，权益以「会员说明」为准。', '月卡：30次减免配送费', '季卡：90次减免配送费', '年卡：360次减免配送费', '＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）' ];
    this.confirm = () => {
      if (this.refs.cardNum.value.length == 10 && this.refs.password.value.length == 6) {
        this.setState({ isButtonActive: true });
      }
      else {
        this.setState({ isButtonActive: false });
      }
    }
  }

  render() {
    return (
      <div id="exchangeCard">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="card-desc">成功兑换后将关联到当前帐号：<span>{this.props.userMes.userName}</span></div>
          <div className="card-input">
            <input type="text" placeholder="请输入10位工号" maxLength="10" ref="cardNum" onChange={this.confirm} />
            <input type="text" placeholder="请输入6位卡密" maxLength="6" ref="password" onChange={this.confirm} />
          </div>
          <div className={"submit-button" + (this.state.isButtonActive ? " active" : "")}>兑换</div>
          <div className="tips">
            <h3>——温馨提示——</h3>
            <div className="top-list">
            {
              this.tipList.map((item, index) => {
                return(
                  <p key={index}>{item}</p>
                );
              })
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'exchangeCard',
  component: Main
})