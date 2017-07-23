import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import Interval from '../../../common/interval/interval';
import data from './mockData.json';
import './shopEvaluation.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.chooseVariety = (ev) => {
      Array.from(this.refs.evaluationVariety.children).forEach((item) => {
        item.classList.remove('active');
      });
      ev.target.classList.add('active');
    }
  }

  render() {
    return(
      <div id="shopEvaluation">
        <div className="shop-score">
          <div className="shop-decimal">
            <p>{data.score}</p>
            <p>综合评价</p>
            <p>高于周边商家{data.ratio}%</p>
          </div>
          <div className="shop-star">
            <div className="service">
              <span>服务态度</span>
              <span className="empty-star"></span>
              <span className="full-star" style={{width: data.service * 0.56 + 'rem'}}></span>
              <span className="score">{data.service}</span>
            </div>
            <div className="dish">
              <span>菜品评价</span>
              <span className="empty-star"></span>
              <span className="full-star" style={{width: data.dish * 0.56 + 'rem'}}></span>
              <span className="score">{data.dish}</span>
            </div>
            <div className="time">
              <span>送达时间</span>
              <span>{data.time}分钟</span>
            </div>
          </div>
        </div>
        <Interval></Interval>
        <div className="user-evaluation">
          <ul className="evaluation-variety" ref="evaluationVariety">
          {
            data.variety.map((item, index) => {
              return(
                <span key={index} className={(index === 0 ? 'active' : '') + (item.name === '不满意' ? 'bad' : '')} onClick={this.chooseVariety}>
                  {item.name}({item.num})
                </span>
              );
            })
          }
          </ul>
          <ul className="evaluation-list">
          {
            data.evaluationList.map((item, index) => {
              return(
                <li key={index}>
                  <div className="user-avatar">
                    <img src={item.avatar} />
                  </div>
                  <div className="user-eval">
                    <div className="user-mes">
                      <p>{item.name}<span>{item.time}</span></p>
                      <span className="empty-star"></span>
                      <span className="full-star" style={{width: item.star * 0.56 + 'rem'}}></span>
                      { item.costTime && <p className="cost-time">{item.costTime}分钟送达</p> }
                    </div>
                    <div className="evaluation-content">{item.content}</div>
                    <div className="food-list" style={Object.assign({}, !item.content && { marginTop: 0.6 + 'rem'})}>
                    {
                      item.food.map((foodItem, foodIndex) => {
                        return(
                          <span key={foodIndex}>
                            {foodItem}
                          </span>
                        );
                      })
                    }
                    </div>
                  </div>
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
  id: 'shopEvaluation',
  component: Main
});