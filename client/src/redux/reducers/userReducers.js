import {
    USER_VIEW_NOMINATION_DETAILS_FAIL, 
    USER_VIEW_NOMINATION_DETAILS_REQUEST, 
    USER_VIEW_NOMINATION_DETAILS_SUCCESS, 
    USER_VIEW_NOMINATION_LIST_FAIL, 
    USER_VIEW_NOMINATION_LIST_REQUEST, 
    USER_VIEW_NOMINATION_LIST_RESET, 
    USER_VIEW_NOMINATION_LIST_SUCCESS 
} from "../constants/userConstants"




export const userViewNominationListReducer = (state = { nominations: [] }, { type, payload }) => {

    switch (type) {
        case USER_VIEW_NOMINATION_LIST_REQUEST:
            return {
                loading: true,
                nominations: []
            }
        
        case USER_VIEW_NOMINATION_LIST_SUCCESS:
            return {
                loading: false,
                nominations: payload
            }

        case USER_VIEW_NOMINATION_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        case USER_VIEW_NOMINATION_LIST_RESET:
            return { 
                nominations: [] 
            }

        default:
            return state;
    }
}




export const  userViewNominationDetailsReducer = (state = { nomination: {} }, { type, payload }) => {

    switch (type) {
        case USER_VIEW_NOMINATION_DETAILS_REQUEST:
            return {
                loading: true,
                nomination: {}
            }
        
        case USER_VIEW_NOMINATION_DETAILS_SUCCESS:
            return {
                loading: false,
                nomination: payload
            }

        case USER_VIEW_NOMINATION_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}