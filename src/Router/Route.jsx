import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import takeaway from '../Component/takeaway/takeaway'; //销售录入

class Roots extends Component {
  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const search = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/search/search').default)
  },'search')
}

const order = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/order').default)
  }, 'order')
}

const user = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/user').default)
  }, 'user')
}

const shopBanner = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/shopBanner/shopBanner').default)
  }, 'shopBanner')
}

const RouteConfig = (
  <Router history={history}>
    <Route path="/" component={Roots}>
      <IndexRoute component={takeaway} />//首页
      <Route path="takeaway" component={takeaway} />
      <Route path="search" getComponent={search} />
      <Route path="order" getComponent={order} />
      <Route path="user" getComponent={user} />
      <Route path="shopBanner" getComponent={shopBanner} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
);

export default RouteConfig;