import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    NOMINATION_LIST_REQUEST,
    NOMINATION_LIST_SUCCESS,
    NOMINATION_LIST_FAIL,
} from '../constants/adminConstants';
import axios from 'axios';



export const getUserList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/admin/user/list`, config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })



    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        

        dispatch({
            type: USER_LIST_FAIL,
            payload: resErr
        })
        
    }
}




export const getNominationList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: NOMINATION_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/admin/nomination/list`, config)

        dispatch({
            type: NOMINATION_LIST_SUCCESS,
            payload: data
        })



    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOMINATION_LIST_FAIL,
            payload: resErr
        })
        
    }
}