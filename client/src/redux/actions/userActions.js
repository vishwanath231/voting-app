import {
    USER_VIEW_NOMINATION_DETAILS_FAIL, 
    USER_VIEW_NOMINATION_DETAILS_REQUEST, 
    USER_VIEW_NOMINATION_DETAILS_SUCCESS, 
    USER_VIEW_NOMINATION_LIST_FAIL, 
    USER_VIEW_NOMINATION_LIST_REQUEST, 
    USER_VIEW_NOMINATION_LIST_SUCCESS 
} from "../constants/userConstants"
import axios from 'axios';


export const getUserViewNominationList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_VIEW_NOMINATION_LIST_REQUEST
        })

        const { verifyOtp: { info } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info}`
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/users/nomination`, config)

        dispatch({
            type: USER_VIEW_NOMINATION_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: USER_VIEW_NOMINATION_LIST_FAIL,
            payload: resErr
        })
    }
}



export const getUserViewNominationDetails = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_VIEW_NOMINATION_DETAILS_REQUEST
        })

        const { verifyOtp: { info } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info}`
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/users/nomination/${id}`, config)

        dispatch({
            type: USER_VIEW_NOMINATION_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: USER_VIEW_NOMINATION_DETAILS_FAIL,
            payload: resErr
        })
    }
}
