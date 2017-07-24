import React, {Component, PropType} from 'react';
import template from '../../../common/template';
import data from './mockData.json';
import './goodList.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consumption: '0.00',
      payText: `¥${data.sendThreshold}元起送`,
      carList: [],
      data
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
      if (target.classList.contains('buy-icon') || !this.refs.carImg.classList.contains('active')) {
        return;
      }
      //this.refs.carImg.classList.toggle('active');
      this.refs.mask.classList.toggle('active');
      this.refs.carDetail.classList.toggle('active');
    }
    this.addGood = (index, goodIndex, ev) => {
      this.animateBall(ev);
      let data = this.state.data;
      data.varietyList[index].orderNum += 1;
      data.varietyList[index].goodList[goodIndex].orderNum += 1;
      let consumption = Number(this.state.consumption) + Number(data.varietyList[index].goodList[goodIndex].nowPrice);
      let payText = this.getPayText(consumption);
      let carList = this.state.carList;
      let goodName = data.varietyList[index].goodList[goodIndex].name;
      let isExist = true;
      for (let i = 0; i < carList.length; i++) {
        if (carList[i].name == goodName) {
          carList[i].num += 1;
          carList[i].price += Number(data.varietyList[index].goodList[goodIndex].nowPrice);
          isExist = false;
          break;
        }
      }
      if (isExist) {
        carList.push({
          name: goodName,
          price: Number(data.varietyList[index].goodList[goodIndex].nowPrice),
          num: 1,
          index,
          goodIndex
        });
      }
      if (!this.refs.carImg.classList.contains('active')) {
        this.refs.carImg.classList.add('active');
      }
      this.setState({
        data,
        consumption,
        payText,
        carList
      });
    }
    this.subGood = (index, goodIndex, key) => {
      let data = this.state.data;
      if (data.varietyList[index].orderNum > 0) {
        data.varietyList[index].orderNum -= 1;
      }
      data.varietyList[index].goodList[goodIndex].orderNum -= 1;
      let consumption = Number(this.state.consumption) - Number(data.varietyList[index].goodList[goodIndex].nowPrice);
      let payText = this.getPayText(consumption);
      let carList = this.state.carList;
      let goodName = data.varietyList[index].goodList[goodIndex].name;
      for (let i = 0; i < carList.length; i++) {
        if (carList[i].name == goodName) {
          if (carList[i].num > 1) {
            carList[i].num -= 1;
            carList[i].price -= Number(data.varietyList[index].goodList[goodIndex].nowPrice);
          }
          else {
            carList.splice(i, 1);
          }
          break;
        }
      }
      if (carList.length === 0) {
        this.refs.carImg.classList.remove('active');
        if (key) {
          this.refs.mask.remove('active');
          this.refs.carDetail.remove('active');
        }
      }
      this.setState({
        data,
        consumption,
        payText,
        carList
      });
    }
    this.clearCar = () => {
      let carList = this.state.carList;
      let data = this.state.data;
      carList.forEach((item) => {
        data.varietyList[item.index].orderNum = 0;
        data.varietyList[item.index].goodList[item.goodIndex].orderNum = 0;
      });
      carList = [];
      this.refs.mask.classList.remove('active');
      this.refs.carDetail.classList.remove('active');
      this.refs.carImg.classList.remove('active');
      this.setState({
        data,
        carList,
        consumption: 0.00,
        payText: this.getPayText(0.00)
      })
    }
    this.animateBall = (ev) => {
      let ball = document.createElement('span');
      ball.className = 'animated-ball';
      ball.style.left = (ev.pageX - 10) + 'px';
      ball.style.top = (ev.pageY - 10) + 'px';
      setTimeout(() => {
        ball.classList.add('animation');
      }, 50);
      this.refs.goodList.appendChild(ball);
      this.refs.carImg.classList.remove('jitter');
      setTimeout(() => {
        this.refs.carImg.classList.add('jitter');
        this.refs.goodList.removeChild(ball);
      }, 800);
    }
    this.getPayText = (price) => {
      if (price == 0.00) {
        this.refs.buyIcon.classList.remove('active');
        return `¥${data.sendThreshold}元起送`;
      }
      if (price > data.sendThreshold) {
        this.refs.buyIcon.classList.add('active');
        return '去支付';
      }
      else {
        this.refs.buyIcon.classList.remove('active');
        let money = data.sendThreshold - Number(price);
        return `还差¥${money}元起送`;
      }
    }
  }

  render() {
    return (
      <div id="goodList" ref="goodList">
        <div className="good-variety">
          <ul>
          {
            this.state.data.varietyList.map((item, index) => {
              return (
                <li key={index} className={index === 0 && 'active'} onClick={this.changeVariety}>
                  <span onClick={this.changeVariety}>{item.name}</span>
                  { item.orderNum > 0 && <span className="order-num">{item.orderNum}</span> }
                </li>
              );
            })
          }
          </ul>
        </div>
        <div className="good-list" ref="goods">
          <ul>
          {
            this.state.data.varietyList.map((item, index) => {
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
                              <span className="add-good" onClick={(ev) => this.addGood(index, goodIndex, ev)}></span>
                              { goodItem.orderNum > 0 && <span className="order-num">{ goodItem.orderNum }</span>}
                              { goodItem.orderNum > 0 && <span className="sub-good" onClick={() => this.subGood(index, goodIndex)}></span>}
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
            <p>¥ {this.state.consumption}</p>
            <p>配送费¥{data.deliveryFee}</p>
          </div>
          <div className="buy-icon" ref="buyIcon">{this.state.payText}</div>
        </div>
        <div className="mask" ref="mask" onClick={this.showShoppingCar}></div>
        <div className="car-detail" ref="carDetail">
          <div className="top-bar" onClick={this.clearCar}>
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
                      <span className="img" onClick={() => this.subGood(item.index, item.goodIndex, 'shoppingCar')}></span>
                      <span className="order-num">{item.num}</span>
                      <span className="img" onClick={() => this.addGood(item.index, item.goodIndex)}></span>
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