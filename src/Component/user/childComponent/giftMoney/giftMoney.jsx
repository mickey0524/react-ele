import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import QuestionMark from '../../../common/questionMark/questionMark';
import data from './mockData.json';
import './giftMoney.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.questionMark = () => {
      this.props.changeQuestionMes({ isShow: true, content: '红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。' });
    }
  }

  render() {
    return(
      <div id="giftMoney">
        <TopBar route={this.props.route}></TopBar>
        { this.props.questionMes.isShow && <QuestionMark></QuestionMark> }
        <div className="container">
          <div className="switch-label">
            <span className="active">红包</span>
            <span>商家代金券</span>
          </div>
          <div className="gift-wrapper">
            <div className="gift-desc">
              <span>有<span>{ data.giftList.length }</span>个红包即将到期</span>
              <span onClick={this.questionMark}>红包说明</span>
              <span onClick={this.questionMark}></span>
            </div>
            <ul className="gift-list">
            {
              data.giftList.map((item, index) => {
                return(
                  <li key={index}>
                    <div className="gift-mes">
                      <div className="gift-money">
                        <p><span>¥</span><span>{item.yuan}</span><span>.</span><span>{item.jiao}</span></p>
                        <p>满 {item.threshold} 元可用</p>
                      </div>
                      <div className="desc">
                        <p>分享红包<span>剩{item.day}日</span></p>
                        <p>{item.maturity}到期</p>
                        <p>限收货手机号为 {item.phone}</p>
                      </div>
                    </div>
                    { item.limit && <div className="limit">{ item.limit }</div> }
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
  id: 'giftMoney',
  component: Main
})