import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import './buyRecord.less';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="buyRecord">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="bg"></div>
          <p>没有购买记录</p>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'buyRecord',
  component: Main
})