import React, {Component, PropType} from 'react';
import template from '../../../common/template';
import data from './mockData.json';
import './goodList.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carList: [
        {
          name: '臭豆腐',
          price: 20,
          num: 1
        },
        {
          name: '臭豆腐',
          price: 20,
          num: 1
        }
      ]
    }
    this.showSlogan = (ev) => {
      let target = ev.target;
      let ndSlogan = target.parentNode.nextElementSibling;
      if (!ndSlogan.style.display || ndSlogan.style.display === 'none') {
        ndSlogan.style.display = 'block';
      }
      else {
        ndSlogan.style.display = 'none';
      }
    }
    this.changeVariety = (ev) => {
      let target = ev.target;
      if (target.nodeName === 'SPAN') {
        target = target.parentNode;
      }
      let parentNode = target.parentNode;
      Array.from(parentNode.children).forEach((item) => {
        item.classList.remove('active');
      });
      target.classList.add('active');
      this.goodListScroll(target.textContent);
    }
    this.goodListScroll = (key) => {
      let goodList = this.refs.goods;
      let liList = goodList.children[0].children;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i].dataset.name == key) {
          let heightDiff = (Number(liList[i].offsetTop) - Number(goodList.scrollTop)) * 0.06;
          let timer = setInterval(() => {
            goodList.scrollTop += heightDiff;
            if (heightDiff > 0 && goodList.scrollTop >= liList[i].offsetTop ||
                heightDiff < 0 && goodList.scrollTop <= liList[i].offsetTop ||
                goodList.scrollTop == goodList.scrollHeight - goodList.offsetHeight) {
              clearInterval(timer);
              goodList.scrollTop = liList[i].offsetTop;
            }
          }, 1000 / 60);
          break;
        }
      }
    }
    this.showShoppingCar = (ev) => {
      let target = ev.currentTarget;
      if (target.classList.contains('buy-icon')) {
        return;
      }
      this.refs.carImg.classList.toggle('active');
      this.refs.mask.classList.toggle('active');
      this.refs.carDetail.classList.toggle('active');
    }
  }

  render() {
    return (
      <div id="goodList">
        <div className="good-variety">
          <ul>
          {
            data.varieties.map((item, index) => {
              return (
                <li key={index} className={index === 0 && 'active'} onClick={this.changeVariety}>
                  <span onClick={this.changeVariety}>{item}</span>
                </li>
              );
            })
          }
          </ul>
        </div>
        <div className="good-list" ref="goods">
          <ul>
          {
            data.varietyList.map((item, index) => {
              return (
                <li key={index} data-name={item.name}>
                  <div className="title">
                    {item.name}<span>{item.desc}</span><span onClick={this.showSlogan}>...</span>
                  </div>
                  <div className="float-slogan">{item.name} {item.desc}</div>
                  <ul>
                  {
                    item.goodList.map((goodItem, goodIndex) => {
                      return (
                        <li key={goodIndex}>
                          <div className="good-avatar">
                            <img src={goodItem.avatar} />
                          </div>
                          <div className="good-mes">
                            <p className="good-name">{goodItem.name}</p>
                            { goodItem.desc && <p className="good-desc">{goodItem.desc}</p> }
                            <p className="good-sale">月售{goodItem.monthSale}份<span>好评率{goodItem.favorableRate}%</span></p>
                            <div className="good-price">
                              <span className="now-price">¥{goodItem.nowPrice}</span>
                              { goodItem.oriPrice && <del>¥{goodItem.oriPrice}</del> }
                              <span className="add-good"></span>
                            </div>
                          </div>
                        </li>
                      );
                    })
                  }
                  </ul>
                </li>
              );
            })
          }
          </ul>
        </div>
        <div className="shopping-car" onClick={this.showShoppingCar}>
          <div className="car-avatar">
            <div className="car-img" ref="carImg">
              <span></span>
            </div>
          </div>
          <div className="car-mes">
            <p>¥ 0.00</p>
            <p>配送费¥5</p>
          </div>
          <div className="buy-icon">去结算</div>
        </div>
        <div className="mask" ref="mask" onClick={this.showShoppingCar}></div>
        <div className="car-detail" ref="carDetail">
          <div className="top-bar">
            <span>购物车</span>
            <div className="clear">
              <span></span>
              清空
            </div>
          </div>
          <div className="car-list">
            <ul>
            {
              this.state.carList.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.name}</span>
                    <span>¥{item.price}</span>
                    <div className="add-sub">
                      <span className="img"></span>
                      <span>{item.num}</span>
                      <span className="img"></span>
                    </div>
                  </li>
                );
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'goodList',
  component: Main
})