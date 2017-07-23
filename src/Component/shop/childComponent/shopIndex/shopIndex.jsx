import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import ShopBanner from '../ShopBanner/shopBanner';
import GoodList from '../goodList/goodList';
import ShopEvaluation from '../shopEvaluation/shopEvaluation';
import './shopIndex.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.changeActive = (ev) => {
      let target = ev.currentTarget;
      for (let i = 0; i < target.children.length; i++) {
        target.children[i].classList.toggle('active');
      }
      if (ev.target.textContent == '评价') {
        this.refs.goodEvaluation.classList.add('evaluation');
        document.getElementsByClassName('shopping-car')[0].style.display = 'none';   //因为这两个元素为fixed，相对的视口为200%，所以需要
        document.getElementsByClassName('car-detail')[0].style.display = 'none';
      }
      else {
        this.refs.goodEvaluation.classList.remove('evaluation');
        document.getElementsByClassName('shopping-car')[0].style.display = 'block';
        document.getElementsByClassName('car-detail')[0].style.display = 'block';
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
        <div className="shop-content">
          <div className="good-evaluation" ref="goodEvaluation">
            <GoodList />
            <ShopEvaluation />
          </div>
        </div>
      </div>
    )
  }
}

export default template({
  id: 'shopIndex',
  component: Main
});