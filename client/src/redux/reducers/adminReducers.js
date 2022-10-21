import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    NOMINATION_LIST_REQUEST,
    NOMINATION_LIST_SUCCESS,
    NOMINATION_LIST_FAIL,
    USER_LIST_RESET,
    NOMINATION_LIST_RESET
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