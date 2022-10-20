import { combineReducers } from 'redux';
import { userLoginReducer, adminLoginReducer, userGenerateOtpReducer, userVerifyOtpReducer, authLoadedReducer } from './authReducers';

export const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    adminLoginInfo: adminLoginReducer,
    generateOtp: userGenerateOtpReducer,
    verifyOtp: userVerifyOtpReducer,
    auth: authLoadedReducer
})

