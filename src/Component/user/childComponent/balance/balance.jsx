import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import QuestionMark from '../../../common/questionMark/questionMark';
import './balance.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.showQuestion = () => {
      this.props.changeQuestionMes({ isShow: true, content: '余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。' });
    }
  }

  render() {
    return (
      <div id="balance">
        <TopBar route={this.props.route}></TopBar>
        { this.props.questionMes.isShow && <QuestionMark></QuestionMark> }
        <div className="balance-container">
          <div className="balance-wrapper">
            <div className="cur-balance">
              <div className="title">
                <span>当前余额</span>
                <span onClick={this.showQuestion}>余额说明</span>
                <span onClick={this.showQuestion}></span>
              </div>
              <div className="balance-num"><span>0.00</span>元</div>
              <div className="reflect">提现</div>
            </div>
          </div>
          <div className="balance-detail">
            <p>交易明细</p>
            <p></p>
            <p>暂无明细记录</p>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'balance',
  component: Main
});