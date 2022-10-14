import { combineReducers } from 'redux';
import { userLoginReducer, adminLoginReducer, userGenerateOtpReducer } from './authReducers';

export const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    adminLoginInfo: adminLoginReducer,
    generateOtp: userGenerateOtpReducer
})

