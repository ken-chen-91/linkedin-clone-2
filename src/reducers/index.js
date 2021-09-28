import {combineReducers} from 'redux'
//combineReducers 将每个reducer组合在一起

import userReducer from './useReducer'

const rootReducer = combineReducers({
    userState: userReducer,
})

export default rootReducer
