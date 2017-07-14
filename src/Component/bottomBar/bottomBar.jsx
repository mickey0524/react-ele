import React, { Component, PropTypes } from 'react';
import './bottomBar.less';

class Main extends Component {

  constructor(props) {
    super(props);

    this.handleClick = (ev) => {
      let target = ev.target;
      if (target.className.indexOf('-') !== -1) {
        target = target.parentNode;
      }
      this.props.changeBottomBar(target.className);
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

export default Main;
