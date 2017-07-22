import React, {Component, PropType} from 'react';
import template from '../../../common/template';
import data from './mockData.json';
import './goodList.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.showSlogan = (ev) => {
      let target = ev.target;
      let ndSlogan = target.parentNode.nextElementSibling;
      console.log(ndSlogan);
      if (!ndSlogan.style.display || ndSlogan.style.display === 'none') {
        ndSlogan.style.display = 'block';
      }
      else {
        ndSlogan.style.display = 'none';
      }
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
                <li key={index} className={index === 0 && 'active'}>
                  <span>{item}</span>
                </li>
              );
            })
          }
          </ul>
        </div>
        <div className="good-list">
          <ul>
          {
            data.varietyList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="title">
                    {item.name}<span>{item.desc}</span><span onTouchStart={this.showSlogan}>...</span>
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
      </div>
    );
  }
}

export default template({
  id: 'goodList',
  component: Main
})