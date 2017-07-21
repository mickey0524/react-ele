import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import mockData from './mock.json';            // mock数据，目前不打算写服务端，只是为了熟悉react
import './variety.less';


/**
 * index页面顶部商品品种
 */

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      varietyList: mockData.varietyList
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ul id="varietyList">
      {
        this.state.varietyList.map((item, index) => {
          return (
            <li key={index}>
              <img src={ item.imgUrl } />
              <p>{ item.name }</p>
            </li>
          )
        })
      }
      </ul>
    );
  }
}

export default template({
  id: 'variety',
  component: Main
});