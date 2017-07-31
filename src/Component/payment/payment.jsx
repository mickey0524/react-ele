import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import TopBar from '../common/topBar/topBar';
import PromptContent from '../common/prompt/prompt';
import './payment.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payWay: true,
      minute: '15',
      second: '00'
    }
    this.changeWay = () => {
      let way = !this.state.payWay;
      this.setState({ payWay: way });
    }
    this.addZero = (num) => {
      if (num < 10) {
        return '0' + num;
      }
      return num;
    }
    this.timing = () => {
      let minute = Number(this.state.minute);
      let second = Number(this.state.second);
      if (second == 0) {
        minute -= 1;
        second = 59;
      }
      else {
        second -= 1;
      }
      this.setState({ minute: this.addZero(minute), second: this.addZero(second) });
    }
    this.recharge = () => {
      this.props.changePromptContent({ isShow: true, content: '暂时不支持支付' });
    }
  }

  render() {
    return(
      <div id="payment">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <PromptContent></PromptContent> }
        <div className="container">
          <div className="time">
            <h3>支付剩余时间</h3>
            <div className="stop-watch">
              <span className="hour">00 : </span>
              <span className="minute">{this.state.minute} : </span>
              <span className="second">{this.state.second}</span>
            </div>
          </div>
          <div className="pay-way">
            <div className="title">选择支付方式</div>
            <div className="zhifubao" onClick={this.changeWay}>
              <span></span>
              <span>支付宝</span>
              <span className={this.state.payWay ?  "active" : ""}>✔</span>
            </div>
            <div className="weixin" onClick={this.changeWay}>
              <span></span>
              <span>微信</span>
              <span className={this.state.payWay ?  "" : "active"}>✔</span>
            </div>
          </div>
          <div className="submit-button" onClick={this.recharge}>
            确认支付
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.timing();
      if (this.state.minute == 0 && this.state.second == 0) {
        clearInterval(this.timer);
        this.timer = null;
        this.props.changePromptContent({ isShow: true, content: '支付超时' });
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

export default template({
  id: 'payment',
  component: Main
})