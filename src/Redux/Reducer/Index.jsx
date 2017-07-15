import {CHANGE_BOTTOM_BAR, CHANGE_TOP_BAR} from '../Action/Index'


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


