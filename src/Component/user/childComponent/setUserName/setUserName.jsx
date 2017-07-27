import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Prompt from '../../../common/prompt/prompt';
import './setUserName.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.submit = () => {
      let value = this.refs.userName.value;
      if (value.length < 5) {
        this.props.changePromptContent({ isShow: true, content: '用户名为5-24字符之间'});
      }
      else {
        this.props.changeUserMes({ userName: value, password: this.props.userMes.password });
      }
    }
  }
  render() {
    return(
      <div id="setUserName">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        <div className="container">
          <input type="text" placeholder="输入用户名" minLength="5" maxLength="24" autoFocus="autoFocus" ref="userName" />
          <p>用户名长度应在5-24字符之间</p>
          <div onClick={this.submit}>确认修改</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'setUserName',
  component: Main
})