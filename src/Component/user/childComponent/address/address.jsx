import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import { browserHistory, hashHistory } from 'react-router';
import './address.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.changeAddress = (ev, index) => {
      if (ev.target.nodeName == 'SPAN') {
        return false;
      }
      this.props.changeAddress(index);
    }
    this.delAddress = (ev, index) => {
      this.props.delAddress(index);
    }
    this.addAddress = () => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/user/addAddress');
    }
  }
  render() {
    return(
      <div id="address">
        <TopBar route={this.props.route}></TopBar>
        <div className="address-container">
          <ul className="address-list" ref="addressList">
          {
            this.props.addressList.map((item, index) => {
              return(
                <li key={index} className={ item.isActive ? 'active' : '' } onClick={(ev) => this.changeAddress(ev, index)}>
                  <p>{item.address}</p>
                  <p>{item.phoneNum}</p>
                  <span onClick={(ev) => this.delAddress(ev, index)}>X</span>
                </li>
              );
            })
          }
          </ul>
          <div className="add-address" onClick={this.addAddress}>
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

