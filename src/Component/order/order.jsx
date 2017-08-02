import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import './order.less';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="order">{ this.props.children }</div>
    );
  }
}

export default template({
  id: 'order',
  component: Main
});