const changeTopBarStatus = (path, props) => {
  let topBar = {
    left: 'back',
    middle: '',
    right: false
  };
  if (path === 'takeaway') {
    topBar.left = 'search';
    topBar.middle = '北京邮电大学';
    topBar.right = true;
  }
  else if (path === 'search') {
    topBar.middle = '搜索';
  }
  else if (path === 'order') {
    topBar.middle = '订单';
  }
  else if (path === 'user') {
    topBar.middle = '我的';
  }
  else if (path === 'shopDetail') {
    topBar.middle = '商家详情';
  }
  else if (path === '/user/account') {
    topBar.middle = '账户信息';
  }
  else if (path === '/user/setUserName') {
    topBar.middle = '修改用户名';
  }
  else if (path === '/user/address') {
    topBar.middle = '编辑地址';
  }
  else if (path === '/user/addAddress') {
    topBar.middle = '新增地址';
  }
  else if (path === '/user/changePassword') {
    topBar.middle = '重置密码';
  }
  else if (path === '/user/balance') {
    topBar.middle = '我的余额';
  }
  else if (path === '/user/giftMoney') {
    topBar.middle = '我的优惠';
  }
  else if (path === '/user/integral') {
    topBar.middle = '我的积分';
  }
  else if (path === '/user/memberCard') {
    topBar.middle = '会员中心';
  }
  else if (path === '/user/exchangeCard') {
    topBar.middle = '兑换会员';
  }
  else if (path === 'payment') {
    topBar.middle = '在线支付';
  }
  else if (path === '/user/buyRecord') {
    topBar.middle = '购买记录';
  }
  else if (path === '/user/serviceCenter') {
    topBar.middle = '服务中心';
  }
  else if (path === '/user/questionDetail') {
    topBar.middle = props.questionDetail.title;
  }
  else if (path === '/order/orderDetail') {
    topBar.middle = '订单详情';
  }
  else if (path === '/order/confirmOrder') {
    topBar.middle = '确认订单';
    topBar.right = true;
  }
  else if (path === '/order/orderNote') {
    topBar.middle = '订单备注';
  }
  else if (path === '/order/orderInvoice') {
    topBar.middle = '选择发票台头';
  }
  return topBar;
};

export {
  changeTopBarStatus
};