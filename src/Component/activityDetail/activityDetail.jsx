import React, {Component, PropType} from 'react';
import template from '../common/template';
import mockData from './mockData.json';
import './activityDetail.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopMes: mockData
    }
    this.back = (ev) => {
      window.history.back();
    }
  }

  render() {
    return(
      <div id="activityDetail">
        <div className="shop-name">{ this.state.shopMes.shopName }</div>
        <div className="shop-star">
          <div className="empty-star"></div>
          <div className="full-star" style={{ width: this.state.shopMes.starNum * 1.12 + 'rem'}}></div>
        </div>
        <div className="discount-mes">
          <div className="discount-title">
            <span>优惠信息</span>
          </div>
          <ul>
          {
            this.state.shopMes.shopActivity.map((item, index) => {
              return (
                <li key={index}>
                { item.variety === 'new' && <span className="new">新</span> }
                { item.variety === 'subtraction' && <span className="subtraction">减</span> }
                { item.variety === 'special' && <span className="special">特</span> }
                { item.variety === 'discount' && <span className="discount">折</span> }
                { item.slogan }
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="shop-slogan">
          <div className="slogan-title">
            <span>商家公告</span>
          </div>
          { this.state.shopMes.slogan }
        </div>
        <div className="back-icon" onClick={this.back}>
          <span>X</span>
        </div>
      </div>
    )
  }
}

export default template({
  id: 'activityDetail',
  component: Main
})