import {CHANGE_BOTTOM_BAR, CHANGE_TOP_BAR, CHANGE_SHOP_LIST, CHANGE_PROMPT_CONTENT} from '../Action/Index'
import {ADD_ADDRESS, DEL_ADDRESS, CHANGE_ADDRESS} from '../Action/Index';


export const bottomChoose = (state = 'takeaway', action = {}) => {
  switch(action.type) {
    case CHANGE_BOTTOM_BAR:
        //var newState = Object.assign({}, state, { bottomChoose: action.bottomChoose });
      return action.bottomChoose;
    default:
      return state;
  }
}

const initTopBar = { left: 'search', middle: '北京邮电大学', right: true };

export const topBar = (state = initTopBar, action = {}) => {
  switch(action.type) {
    case CHANGE_TOP_BAR:
      var newState = Object.assign({}, state, action.topBar);
      return newState;
    default:
      return state;
  }
}

export const shopList = (state = [], action = {}) => {
  switch(action.type) {
    case CHANGE_SHOP_LIST:
      return action.shopList;
    default:
      return state;
  }
}

const initPrompt = { isShow: false, content: '地址信息错误' };
export const promptContent = (state = initPrompt, action = {}) => {
  switch(action.type) {
    case CHANGE_PROMPT_CONTENT:
      var newState = Object.assign({}, state, action.promptContent);
      return newState;
    default:
      return state;
  }
}

const initAddress = [{ address: "北京邮电大学", phoneNum : "12312312312", isActive: true }, { address: "双榆树", phoneNum: "123123123", isActive: false }];
export const addressList = (state = initAddress, action = {}) => {
  switch(action.type) {
    case ADD_ADDRESS:
      var newState = state.slice();
      newState.push(action.address);
      return newState;
    case DEL_ADDRESS:
      var newState = state.slice();
      if (newState.length > 1) {
        newState[(action.index + 1) % newState.length].isActive = true;
      }
      newState.splice(action.index, 1);
      return newState;
    case CHANGE_ADDRESS:
      var newState = [];
      state.forEach((item) => {
        newState.push({
          address: item.address,
          phoneNum: item.phoneNum,
          isActive: item.isActive
        });
      });
      for (let i = 0, len = newState.length; i < len; i++) {
        if (newState[i].isActive) {
          newState[i].isActive = false;
          break;
        }
      }
      newState[action.index].isActive = true;
      return newState;
    default:
      return state;
  }
}


