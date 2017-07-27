import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import data from './mockData.json';
import TopBar from '../../../common/topBar/topBar';
import Prompt from '../../../common/prompt/prompt';
import { browserHistory, hashHistory } from 'react-router';
import './account.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.setUserName = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/user/setUserName');
    }
    this.toAddress = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/user/address');
    }
    this.bindPhone = () => {
      this.props.changePromptContent({ isShow: true, content: '请在手机APP中设置' });
    }
    this.changePassword = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/user/changePassword');
    }
  }

  render() {
    return (
      <div id="account">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        <div className="account-container">
          <div className="user-mes">
            <div className="user-avatar">
              头像
              <img src={data.avatar} />
            </div>
            <div className="user-name" onClick={this.setUserName}>
              用户名
              <span>{this.props.userMes.userName} ></span>
            </div>
            <div className="address" onClick={this.toAddress}>
              收货地址
              <span>></span>
            </div>
          </div>
          <div className="bind-account">
            <p>账号绑定</p>
            <div onClick={this.bindPhone}>
              <span></span>
              <span>手机</span>
              <span>></span>
            </div>
          </div>
          <div className="security-settings">
            <p>安全设置</p>
            <div onClick={this.changePassword}>
              <span>登录密码</span>
              <span>修改 ></span>
            </div>
          </div>
          <div className="login-out">退出登录</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'account',
  component: Main
})