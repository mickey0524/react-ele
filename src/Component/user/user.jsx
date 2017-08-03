import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './user.less';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName="transitionWrapper"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div key={this.props.location.pathname}
             id="user"
             style={{position:"absolute", width: "100%"}}>
          {
            this.props.children
          }
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default template({
  id: 'user',
  component: Main
})