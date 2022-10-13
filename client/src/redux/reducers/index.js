import { combineReducers } from 'redux';
import { userLoginReducer, adminLoginReducer } from './authReducers';

export const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    adminLoginInfo: adminLoginReducer
})

