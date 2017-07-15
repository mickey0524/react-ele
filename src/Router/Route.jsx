import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import baihao from '../Component/shopList/shopList'; //销售录入

class Roots extends Component {
    render() {
        return (
            <div>{ this.props.children }</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

// const baihao = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Component/variety/index').default)
//     }, 'baihao')
// }


// const baihao = require('../Component/baihao').default;
// import baihao from '../Component/baihao';

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={baihao} />//首页
            <Route path="baihao" component={baihao} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;