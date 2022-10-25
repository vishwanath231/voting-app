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
import { 
    userViewNominationDetailsReducer, 
    userViewNominationListReducer 
} from './userReducers';

export const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    generateOtp: userGenerateOtpReducer,
    verifyOtp: userVerifyOtpReducer,
    auth: authLoadedReducer,
    userViewNominationList: userViewNominationListReducer,
    userViewNominationDetails: userViewNominationDetailsReducer,

    adminLoginInfo: adminLoginReducer,
    userList: userListReducer,
    newNomination: newNominationReducer,
    nominationList: nominationListReducer,
    userDetails: userDetailsReducer,
    nominationDetails: nominationDetailsReducer
})

