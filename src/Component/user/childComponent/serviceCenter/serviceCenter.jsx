import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Prompt from '../../../common/prompt/prompt';
import data from './mockData.json';
import './serviceCenter.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.toService = () => {
      this.props.changePromptContent({ isShow: true, content: '请进入真实饿了么app '});
    }
  }

  render() {
    return(
      <div id="serviceCenter">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        <div className="container">
          <div className="service-connect" onClick={this.toService}>
            <div className="online">
              <p></p>
              <p>在线客服</p>
            </div>
            <div className="phone">
              <p></p>
              <p>电话客服</p>
            </div>
          </div>
          <div className="question">
            <h3>热门问题</h3>
            <ul>
            {
              data.questionList.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.name}</span>
                    <span>></span>
                  </li>
                );
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'serviceCenter',
  component: Main
})