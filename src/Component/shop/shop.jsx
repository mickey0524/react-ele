import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import mockData from './mockData.json';
import './shop.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.props.changeBottomBar('shop');
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default template({
  id: 'shop',
  component: Main
});