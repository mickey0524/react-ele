
export const CHANGE_BOTTOM_BAR = 'CHANGE_BOTTOM_BAR';
export const CHANGE_TOP_BAR = 'CHANGE_TOP_BAR';
export const CHANGE_SHOP_LIST = 'CHANGE_SHOP_LIST';
export const CHANGE_PROMPT_CONTENT = 'CHANGE_PROMPT_CONTENT';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DEL_ADDRESS = 'DEL_ADDRESS';
export const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
export const CHANGE_USER_MES = 'CHANGE_USER_MES';
export const CHANGE_QUESTION_MES = 'CHANGE_QUESTION_MES';
export const CHANGE_QUESTION_DETAIL = 'CHANGE_QUESTION_DETAIL';
export const CHANGE_ORDER_NOTE = 'CHANGE_ORDER_NOTE';
export const CHANGE_ORDER_INVOICE = 'CHANGE_ORDER_INVOICE';

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

export const changePromptContent = (promptContent) => {
  return {
    type: CHANGE_PROMPT_CONTENT,
    promptContent
  }
}

export const addAddress = (address) => {
  return {
    type: ADD_ADDRESS,
    address
  }
}

export const delAddress = (index) => {
  return {
    type: DEL_ADDRESS,
    index
  }
}

export const changeAddress = (index) => {
  return {
    type: CHANGE_ADDRESS,
    index
  }
}

export const changeUserMes = (userMes) => {
  return {
    type: CHANGE_USER_MES,
    userMes
  }
}

export const changeQuestionMes = (questionMes) => {
  return {
    type: CHANGE_QUESTION_MES,
    questionMes
  }
}

export const changeQuestionDetail = (questionDetail) => {
  return {
    type: CHANGE_QUESTION_DETAIL,
    questionDetail
  }
}

export const changeOrderNote = (orderNote) => {
  return {
    type: CHANGE_ORDER_NOTE,
    orderNote
  }
}

export const changeOrderInvoice = (orderInvoice) => {
  return {
    type: CHANGE_ORDER_INVOICE,
    orderInvoice
  }
}