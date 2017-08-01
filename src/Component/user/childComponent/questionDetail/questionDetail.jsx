import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import './questionDetail.less';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="questionDetail">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="content">{this.props.questionDetail.content}</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'questionDetail',
  component: Main
})