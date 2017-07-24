import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import data from './mockData.json';
import './address.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.addressList
    }
    this.changeAddress = (index) => {
      let data = this.state.data;
      data.forEach((item) => {
        item.isActive = false;
      })
      data[index].isActive = true;
      this.setState({data});
    }
    this.delAddress = (ev, index) => {
      let data = this.state.data;
      if (data[index].isActive && data.length > 1) {
        data[(index + 1) % data.length].isActive = true;
      }
      data.splice(index, 1);
      this.setState({data});
    }
  }

  render() {
    return(
      <div id="address">
        <TopBar route={this.props.route}></TopBar>
        <div className="address-container">
          <ul className="address-list" ref="addressList">
          {
            this.state.data.map((item, index) => {
              return(
                <li key={index} className={ item.isActive ? 'active' : '' } onClick={() => this.changeAddress(index)}>
                  <p>{item.address}</p>
                  <p>{item.phoneNum}</p>
                  <span onClick={(ev) => this.delAddress(ev, index)}>X</span>
                </li>
              );
            })
          }
          </ul>
          <div className="add-address">
            <span>新增地址</span>
            <span>></span>
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'address',
  component: Main
})

