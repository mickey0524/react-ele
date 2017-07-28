import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import './balance.less';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="balance">
        <TopBar route={this.props.route}></TopBar>
        <div className="balance-container">
          <div className="balance-wrapper">
            <div className="cur-balance">
              <div className="title">
                <span>当前余额</span>
                <span>余额说明</span>
                <span></span>
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