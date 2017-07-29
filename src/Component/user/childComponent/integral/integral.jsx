import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import QuestionMark from '../../../common/questionMark/questionMark';
import Prompt from '../../../common/prompt/prompt';
import './integral.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.showQuestion = () => {
      this.props.changeQuestionMes({ isShow: true, content: '礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。' });
    }
    this.showPrompt = () => {
      this.props.changePromptContent({ isShow: true, content: '快去下单赚取大量积分吧' });
    }
  }

  render() {
    return (
      <div id="balance">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        { this.props.questionMes.isShow && <QuestionMark></QuestionMark> }
        <div className="balance-container">
          <div className="balance-wrapper">
            <div className="cur-balance">
              <div className="title">
                <span>当前积分</span>
                <span onClick={this.showQuestion}>积分说明</span>
                <span onClick={this.showQuestion}></span>
              </div>
              <div className="balance-num"><span>0</span>分</div>
              <div className="exchange" onClick={this.showPrompt}>积分兑换商品</div>
            </div>
          </div>
          <div className="balance-detail">
            <p>最近30天积分纪录</p>
            <p></p>
            <p>最近30天无积分纪录</p>
            <p>快去下单赚取大量积分吧</p>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'integral',
  component: Main
})
