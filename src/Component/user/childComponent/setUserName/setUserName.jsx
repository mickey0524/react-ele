import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import './setUserName.less';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="setUserName">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <input type="text" placeholder="输入用户名" />
          <p>用户名只能修改一次（5-24字符之间）</p>
          <div>确认修改</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'setUserName',
  component: Main
})