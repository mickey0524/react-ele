import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Prompt from '../../../common/prompt/prompt';
import { browserHistory, hashHistory } from 'react-router';
import './changePassword.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.submit = () => {
      console.log('asd');
      let [ account, oldPassword, newPassword, confirmPassword ]
          = [ this.refs.account.value, this.refs.oldPassword.value,
              this.refs.newPassword.value, this.refs.confirmPassword.value ];
      if (!account || !oldPassword || !newPassword || !confirmPassword) {
        this.props.changePromptContent({ isShow: true, content: '请填完所有空!'});
      }
      else if (account != this.props.userMes.userName) {
        this.props.changePromptContent({ isShow: true, content: '账号不存在!'});
      }
      else if (oldPassword != this.props.userMes.password) {
        this.props.changePromptContent({ isShow: true, content: '密码错误!'});
      }
      else if (newPassword != confirmPassword) {
        this.props.changePromptContent({ isShow: true, content: '两次输入密码不一样!'});
      }
      else {
        this.props.changeUserMes({ userName: this.props.userMes.userName, password: newPassword });
        const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
        history.push('/user/account');
      }
    }
  }

  render() {
    return(
      <div id="changePassword">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        <div className="container">
          <div className="input-group">
            <input type="text" placeholder="账号" ref="account" />
            <input type="text" placeholder="旧密码" ref="oldPassword" />
            <input type="text" placeholder="请输入新密码" ref="newPassword" />
            <input type="text" placeholder="请确认密码" ref="confirmPassword" />
          </div>
          <div className="change-button" onClick={this.submit}>
            确认修改
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'changePassword',
  component: Main
})