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

// const topBar = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Component/topBar/topBar').default)
//     },'topBar')
// }

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={takeaway} />//首页
            <Route path="takeaway" getComponent={takeaway} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;