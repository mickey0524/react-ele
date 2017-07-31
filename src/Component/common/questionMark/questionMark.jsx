import React, { Component, PropTypes } from 'react';
import template from '../template';
import './questionMark.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = (ev) => {
      if (ev.target.className == 'content') {
        return false;
      }
      this.props.changeQuestionMes({ isShow: false, content: '' });
    }
  }

  render() {
    return (
      <div id="questionMark" onClick={this.handleClick}>
        <div className="container">
          <div className="content">{this.props.questionMes.content}</div>
          <div className="submit-button" onClick={this.handleClick}>知道了</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'questionMark',
  component: Main
});