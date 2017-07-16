import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import { browserHistory, hashHistory } from 'react-router';
import { changeTopBarStatus } from '../../Utils/changeTopBarStatus';
import './topBar.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.onSearchClick = (ev) => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/search');
      this.props.changeBottomBar('search');
      this.props.changeTopBar({
        left: 'back',
        middle: '搜索',
        right: false
      });
    }
    this.onBackClick = (ev) => {
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.goBack(1);
    }
  }

  render() {
    return (
      <div id="topBar">
        {
          this.props.topBar.left === 'search' ? (
            <div className="search-icon" onClick={this.onSearchClick}></div>
          ) : (
            <div className="back-icon" onClick={this.onBackClick}></div>
          )
        }
        <span>{ this.props.topBar.middle }</span>
        {
          this.props.topBar.right && <div className="account-icon"></div>
        }
      </div>
    );
  }

  componentDidMount() {
    let path = this.props.route.path;
    this.props.changeBottomBar(path);
    this.props.changeTopBar(changeTopBarStatus(path));
  }
}

export default template({
  id: 'topBar',
  component: Main
});

