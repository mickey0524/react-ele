import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import './topBar.less';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="topBar">
        {
          this.props.topBar.left === 'search' ? (
            <div className="search-icon"></div>
          ) : (
            <div className="back-icon"></div>
          )
        }
        <span>{ this.props.topBar.middle }</span>
        {
          this.props.topBar.right && <div className="account-icon"></div>
        }
      </div>
    );
  }
}

export default template({
  id: 'topBar',
  component: Main
});

