const changeTopBarStatus = (path) => {
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
  return topBar;
}

export {
  changeTopBarStatus
}