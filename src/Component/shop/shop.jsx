import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import mockData from './mockData.json';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './shop.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.props.changeBottomBar('shop');
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="transitionWrapper"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div key={this.props.location.pathname}
             id="shop"
             style={{position:"absolute", width: "100%"}}>
          {
            this.props.children
          }
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default template({
  id: 'shop',
  component: Main
});