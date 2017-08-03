import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from '../Router/Route'; //路由配置
import store from '../Redux/Store/Store';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import '../Config/Config.js';//引入默认配置

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={store}>
        {route}
      </Provider>
    );
  }
}

export default Main;