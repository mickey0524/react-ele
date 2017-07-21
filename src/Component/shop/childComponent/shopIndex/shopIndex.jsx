import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import ShopBanner from '../ShopBanner/shopBanner';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="shopIndex">
        <ShopBanner></ShopBanner>
      </div>
    )
  }
}

export default template({
  id: 'shopIndex',
  component: Main
});