import { combineReducers } from 'redux';
import { 
    newNominationReducer,
    nominationDetailsReducer,
    nominationListReducer, 
    userDetailsReducer, 
    userListReducer 
} from './adminReducers';

import { 
    userLoginReducer, 
    adminLoginReducer, 
    userGenerateOtpReducer, 
    userVerifyOtpReducer, 
    authLoadedReducer
} from './authReducers';

export const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    adminLoginInfo: adminLoginReducer,
    generateOtp: userGenerateOtpReducer,
    verifyOtp: userVerifyOtpReducer,
    auth: authLoadedReducer,
    userList: userListReducer,
    newNomination: newNominationReducer,
    nominationList: nominationListReducer,
    userDetails: userDetailsReducer,
    nominationDetails: nominationDetailsReducer
})

