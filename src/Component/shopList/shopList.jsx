import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import IntersectionObserver from '../../Utils/intersection-observer.js';
import mockData from './mock.json';            // mock数据，目前不打算写服务端，只是为了熟悉react
import placeholder from '../../images/placeholder-img.png';
import './shopList.less';

/**
 * index页面种类下面商家的滚动列表
 */

class Main extends Component {

  constructor(props) {

    super(props);
    if (this.props.route && this.props.route.path === 'takeaway') {
      this.state = {
        shopList: mockData.shopList
      }
    }
    else {
      this.state = {
        shopList: this.props.shopList
      }
    }
  }

  componentDidMount() {
    let queryLazyLoad = () => {
      return Array.from(document.querySelectorAll('.lazy-load'));
    }
    let observer = new IntersectionObserver(
      function(changes) {
        changes.forEach(function(change) {
          if (change.intersectionRatio != 0) {
            var img = change.target;
            img.src = img.dataset.img;
            observer.unobserve(img);
          }
        });
      }
    );
    queryLazyLoad().forEach((item) => {
      observer.observe(item);
    });
  }

  render () {
    return (
      <div id="shopList">
        <ul>
          {
            this.state.shopList.map((item, index) => {
              return (
                <li className="shop-item" key={index}>
                  <div className="left">
                    <div className="shop-img">
                      <img src={placeholder} data-img={item.imgUrl} className="lazy-load" />
                    </div>
                    {
                      item.isNewShop &&
                      <div className="new-shop">
                        <span>新店</span>
                      </div>
                    }
                    <div className="shop-mes">
                      <div className="shop-title">
                        {
                          item.isBrand && <span className="brand">品牌</span>
                        }
                        <span className="shop-name">{ item.shopName }</span>
                      </div>
                      <div className="shop-score">
                        <div className="empty-stars"></div>
                        <div className="full-stars" style={{ width: item.starNum * 0.56 + 'rem' }}></div>
                        <span className="star-num">{ item.starNum }</span>
                        <span className="month-sale">{ item.monthlySales }单</span>
                        <p>¥{ item.initMoney }起送 / 配送费约¥{ item.deliveryFee }</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="shop-service">
                      { item.isInsurance && <span>保</span> }
                      { item.isOntime && <span>准</span> }
                      { item.needtip && <span>票</span> }
                    </div>
                    <div className="distribution">
                      { item.isBird && <span className="bird">蜂鸟专送</span> }
                      { item.isOntime && <span className="ontime">准时达</span> }
                    </div>
                    <div className="shop-distance">
                      { item.distance }公里 / <span>{ item.needTime }</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default template({
  id: 'shopList',
  component: Main
})