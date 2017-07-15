import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import TopBar from '../topBar/topBar';
import Variety from '../variety/variety';
import ShopList from '../shopList/shopList';
import BottomBar from '../bottomBar/bottomBar';
import Interval from '../interval/interval';
import './takeaway.less';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="takeaway">
        <TopBar></TopBar>
        <Variety></Variety>
        <Interval></Interval>
        <ShopList></ShopList>
        <BottomBar></BottomBar>
      </div>
    );
  }
}

export default template({
  id: 'takeaway',
  component: Main
});