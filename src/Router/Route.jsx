import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { shop, shopIndex, ac, shopDetail } from './shop.jsx';
import { user, userIndex, account, setUserName, address, addAddress, changePassword, balance, giftMoney, integral, memberCard } from './user.jsx';

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

const RouteConfig = (
  <Router history={history}>
    <Route path="/" component={Roots}>
      <IndexRoute component={takeaway} />//首页
      <Route path="takeaway" component={takeaway} />
      <Route path="search" getComponent={search} />
      <Route path="order" getComponent={order} />
      <Route path="user" getComponent={user}>
        <IndexRoute getComponent={userIndex} />
        <Route path="/user/account" getComponent={account} />
        <Route path="/user/setUserName" getComponent={setUserName} />
        <Route path="/user/address" getComponent={address} />
        <Route path="/user/addAddress" getComponent={addAddress} />
        <Route path="/user/changePassword" getComponent={changePassword} />
        <Route path="/user/balance" getComponent={balance} />
        <Route path="/user/giftMoney" getComponent={giftMoney} />
        <Route path="/user/integral" getComponent={integral} />
        <Route path="/user/memberCard" getComponent={memberCard} />
      </Route>
      <Route path="shop" getComponent={shop}>
        <IndexRoute getComponent={shopIndex} />
        <Route path="/shop/activityDetail" getComponent={ac} />
        <Route path="/shop/shopDetail" getComponent={shopDetail} />
      </Route>
    </Route>
    <Redirect from='*' to='/' />
  </Router>
);

export default RouteConfig;