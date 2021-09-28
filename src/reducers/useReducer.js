//Reducer：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。

import {SET_USER} from "../actions/actionType.js"

const INITIAL_STSTE = {
    user: null,
}

const userReducer = (state = INITIAL_STSTE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,

            }
        default:
            return state;
    }
}

export default userReducer;
