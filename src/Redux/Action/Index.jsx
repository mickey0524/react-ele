
export const CHANGE_BOTTOM_BAR = 'CHANGE_BOTTOM_BAR';
export const CHANGE_TOP_BAR = 'CHANGE_TOP_BAR';
export const CHANGE_SHOP_LIST = 'CHANGE_SHOP_LIST';

export const changeBottomBar = (bottomChoose) => {
  return {
    type: CHANGE_BOTTOM_BAR,
    bottomChoose
  }
}

export const changeTopBar = (topBar) => {
  return {
    type: CHANGE_TOP_BAR,
    topBar
  }
}

export const changeShopList = (shopList) => {
  return {
    type: CHANGE_SHOP_LIST,
    shopList
  }
}
