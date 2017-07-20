import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import mockData from './mockData.json';
import ShopBanner from '../shopBanner/shopBanner';
import './shop.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.props.changeBottomBar('shop');
  }

  render() {
    return (
      <ShopBanner></ShopBanner>
    )
  }
}

export default template({
  id: 'shop',
  component: Main
});