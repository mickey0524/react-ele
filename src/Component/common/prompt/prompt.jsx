import React, { Component, PropTypes } from 'react';
import template from '../template';
import { browserHistory, hashHistory } from 'react-router';
import './prompt.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      if (this.props.promptContent.content == '暂时不支持支付') {
        history.push('order');
      }
      this.props.changePromptContent({
        isShow: false,
        content: ''
      })
    }
  }

  render() {
    return(
      <div id="prompt">
        <div className="prompt-icon">
          <span></span>
          <span></span>
        </div>
        <p>{this.props.promptContent.content}</p>
        <div className="submit-button" onClick={this.handleClick}>确认</div>
      </div>
    );
  }
}

export default template({
  id: 'prompt',
  component: Main
})