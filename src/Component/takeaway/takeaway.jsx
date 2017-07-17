import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import TopBar from '../topBar/topBar';
import Variety from '../variety/variety';
import ShopList from '../shopList/shopList';
import BottomBar from '../bottomBar/bottomBar';
import Interval from '../interval/interval';
import './takeaway.less';

class Main extends Component {
  static isTopShow = false;
  constructor(props) {
    super(props);
    this.state = {
      isTopShow: false
    }
    this.backToTop = () => {
      let unitChange = this.refs.takeaway.scrollTop * 0.06;
      let timer = setInterval(() => {
        this.refs.takeaway.scrollTop -= unitChange;
        if (this.refs.takeaway.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 1000 / 60);
      this.setState({ isTopShow: false });
    }
  }

  render() {
    return (
      <div id="takeaway">
        <TopBar route={this.props.route}></TopBar>
        <div className="takeaway-container" ref="takeaway">
          <Variety></Variety>
          <Interval></Interval>
          <ShopList route={this.props.route}></ShopList>
          { this.state.isTopShow && <div className="top-icon" onClick={this.backToTop}></div> }
        </div>
        <BottomBar></BottomBar>
      </div>
    );
  }

  componentDidMount() {
    let _this = this;
    this.refs.takeaway.addEventListener('scroll', function(ev) {
      if (ev.target.scrollTop > 200) {
        _this.setState({ isTopShow: true });
      }
      else {
        _this.setState({ isTopShow: false });
      }
    }, false);
  }
}

export default template({
  id: 'takeaway',
  component: Main
});