import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import { browserHistory, hashHistory } from 'react-router';
import './bottomBar.less';

class Main extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = (ev) => {
      let target = ev.target;
      // console.log(target.);
      if (target.className.indexOf('-') !== -1 || target.nodeName === 'P') {
        target = target.parentNode;
      }
      this.props.changeBottomBar(target.className);
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/' + target.className);
    }
  }

  render() {
    return (
      <div id="bottomBar">
        <div className="takeaway" onClick={this.handleClick}>
          {
            this.props.bottomChoose === 'takeaway' ? (
              <span className="takeaway-blue"></span>
            ) : (
              <span className="takeaway-grey"></span>
            )
          }
          <p>外卖</p>
        </div>
        <div className="search" onClick={this.handleClick}>
          {
            this.props.bottomChoose === 'search' ? (
              <span className="search-blue"></span>
            ) : (
              <span className="search-grey"></span>
            )
          }
          <p>搜索</p>
        </div>
        <div className="order" onClick={this.handleClick}>
          {
            this.props.bottomChoose === 'order' ? (
              <span className="order-blue"></span>
            ) : (
              <span className="order-grey"></span>
            )
          }
          <p>订单</p>
        </div>
        <div className="user" onClick={this.handleClick}>
          {
            this.props.bottomChoose === 'user' ? (
              <span className="user-blue"></span>
            ) : (
              <span className="user-grey"></span>
            )
          }
          <p>我的</p>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'bottomBar',
  component: Main
});
