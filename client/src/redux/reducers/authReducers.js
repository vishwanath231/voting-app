import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOGOUT
} from '../constants/authConstants';


export const userLoginReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
    
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                info: payload
            }
      
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: payload
            }
       
        case LOGOUT:
            return {}

        default:
            return state;
    }
} 



export const adminLoginReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ADMIN_LOGIN_REQUEST:
            return {
                loading: true
            }
    
        case ADMIN_LOGIN_SUCCESS:
            return {
                loading: false,
                info: payload
            }
      
        case ADMIN_LOGIN_FAIL:
            return {
                loading: false,
                error: payload
            }
       
        case LOGOUT:
            return {}

        default:
            return state;
    }
} 