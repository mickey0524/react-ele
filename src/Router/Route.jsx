import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { shop, shopIndex, ac, shopDetail } from './shop.jsx';
import { user, userIndex, account, setUserName, address, addAddress, changePassword, balance, giftMoney } from './user.jsx';
import { integral, memberCard, exchangeCard, buyRecord, serviceCenter, questionDetail } from './user.jsx';

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

const orderIndex = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/orderIndex/orderIndex').default)
  }, 'orderIndex')
}

const orderDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/orderDetail/orderDetail').default)
  }, 'orderDetail')
}

const payment = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/payment/payment').default)
  }, 'payment')
}

const RouteConfig = (
  <Router history={history}>
    <Route path="/" component={Roots}>
      <IndexRoute component={takeaway} />//首页
      <Route path="takeaway" component={takeaway} />
      <Route path="search" getComponent={search} />
      <Route path="order" getComponent={order}>
        <IndexRoute getComponent={orderIndex} />
        <Route path="/order/orderDetail" getComponent={orderDetail} />
      </Route>
      <Route path="payment" getComponent={payment} />
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
        <Route path="/user/exchangeCard" getComponent={exchangeCard} />
        <Route path="/user/buyRecord" getComponent={buyRecord} />
        <Route path="/user/serviceCenter" getComponent={serviceCenter} />
        <Route path="/user/questionDetail" getComponent={questionDetail} />
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