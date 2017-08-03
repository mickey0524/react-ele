import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import { browserHistory, hashHistory } from 'react-router';
import './orderInvoice.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.changeOrderInvoice = () => {
      let value = this.refs.invoice.value.trim();
      if (!value) {
        value = '不需要开发票';
      }
      this.props.changeOrderInvoice(value);
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/order/confirmOrder');
    }
  }

  render() {
    return(
      <div id="orderInvoice">
        <TopBar route={this.props.route} />
        <div className="container">
          <textarea placeholder="请输入发票台头" ref="invoice"></textarea>
          <div className="submit-button" onClick={this.changeOrderInvoice}>确认</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'orderInvoice',
  component: Main
})