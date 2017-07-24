import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import './user.less';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="user">{ this.props.children }</div>
    );
  }
}

export default template({
  id: 'user',
  component: Main
})