import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    NOMINATION_LIST_REQUEST,
    NOMINATION_LIST_SUCCESS,
    NOMINATION_LIST_FAIL,
    USER_LIST_RESET,
    NOMINATION_LIST_RESET,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    NOMINATION_DETAILS_REQUEST,
    NOMINATION_DETAILS_SUCCESS,
    NOMINATION_DETAILS_FAIL
} from '../constants/adminConstants';


export const userListReducer = (state = { users: [] }, { type, payload }) => {

    switch (type) {
        case USER_LIST_REQUEST:
            return {
                loading: true,
                users: []
            }
        
        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: payload
            }

        case USER_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        case USER_LIST_RESET:
            return { 
                users: [] 
            }

        default:
            return state;
    }
}


export const userDetailsReducer = (state = { user: {} }, { type, payload }) => {

    switch (type) {
        case USER_DETAILS_REQUEST:
            return {
                loading: true,
                user: {}
            }
        
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: payload
            }

        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}




export const nominationListReducer = (state = { nominations: [] }, { type, payload }) => {

    switch (type) {
        case NOMINATION_LIST_REQUEST:
            return {
                loading: true,
                nominations: []
            }
        
        case NOMINATION_LIST_SUCCESS:
            return {
                loading: false,
                nominations: payload
            }

        case NOMINATION_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        case NOMINATION_LIST_RESET:
            return { 
                nominations: [] 
            }

        default:
            return state;
    }
}




export const nominationDetailsReducer = (state = { nomination: {} }, { type, payload }) => {

    switch (type) {
        case NOMINATION_DETAILS_REQUEST:
            return {
                loading: true,
                nomination: {}
            }
        
        case NOMINATION_DETAILS_SUCCESS:
            return {
                loading: false,
                nomination: payload
            }

        case NOMINATION_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}