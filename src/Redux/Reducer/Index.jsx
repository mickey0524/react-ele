import {CHANGE_BOTTOM_BAR, CHANGE_TOP_BAR, CHANGE_SHOP_LIST, CHANGE_PROMPT_CONTENT} from '../Action/Index'
import {ADD_ADDRESS, DEL_ADDRESS, CHANGE_ADDRESS, CHANGE_USER_MES} from '../Action/Index';
import {CHANGE_QUESTION_MES, CHANGE_QUESTION_DETAIL, CHANGE_ORDER_NOTE} from '../Action/Index';


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

const initUserMes = { userName: 'baihao0524', password: 'baihao0524' };
export const userMes = (state = initUserMes, action = {}) => {
  switch(action.type) {
    case CHANGE_USER_MES:
      var newState = Object.assign({}, state, action.userMes);
      return newState;
    default:
      return state;
  }
}

export const questionMes = (state = { isShow: false, content: '' }, action = {}) => {
  switch(action.type) {
    case CHANGE_QUESTION_MES:
      var newState = Object.assign({}, state, action.questionMes);
      return newState;
    default:
      return state;
  }
}

export const questionDetail = (state = { title: '', content: '' }, action = {}) => {
  switch(action.type) {
    case CHANGE_QUESTION_DETAIL:
      var newState = Object.assign({}, state, action.questionDetail);
      return newState;
    default:
      return state;
  }
}

export const orderNote = (state = '口味，偏好', action = {}) => {
  switch(action.type) {
    case CHANGE_ORDER_NOTE:
      return action.orderNote;
    default:
      return state;
  }
}
