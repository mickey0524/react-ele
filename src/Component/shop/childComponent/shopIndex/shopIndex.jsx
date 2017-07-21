import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import ShopBanner from '../ShopBanner/shopBanner';
import GoodList from '../goodList/goodList';
import './shopIndex.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.changeActive = (ev) => {
      let target = ev.currentTarget;
      for (let i = 0; i < target.children.length; i++) {
        target.children[i].classList.toggle('active');
      }
    }
  }

  render() {
    return (
      <div id="shopIndex">
        <ShopBanner></ShopBanner>
        <div className="switch-label" onClick={this.changeActive}>
          <span className="active">商品</span>
          <span>评价</span>
        </div>
        <GoodList />
      </div>
    )
  }
}

export default template({
  id: 'shopIndex',
  component: Main
});