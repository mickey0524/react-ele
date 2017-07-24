import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import data from './mockData.json';
import TopBar from '../../../common/topBar/topBar';
import { browserHistory, hashHistory } from 'react-router';
import './account.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.setUserName = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/user/setUserName');
    }
  }

  render() {
    return (
      <div id="account">
        <TopBar route={this.props.route}></TopBar>
        <div className="account-container">
          <div className="user-mes">
            <div className="user-avatar">
              头像
              <img src={data.avatar} />
            </div>
            <div className="user-name" onClick={this.setUserName}>
              用户名
              <span>{data.userName} ></span>
            </div>
            <div className="address">
              收货地址
              <span>></span>
            </div>
          </div>
          <div className="bind-account">
            <p>账号绑定</p>
            <div>
              <span></span>
              <span>手机</span>
              <span>></span>
            </div>
          </div>
          <div className="security-settings">
            <p>安全设置</p>
            <div>
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