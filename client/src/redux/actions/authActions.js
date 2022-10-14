import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOGOUT,
    USER_GENERATE_OTP_REQUEST,
    USER_GENERATE_OTP_SUCCESS,
    USER_GENERATE_OTP_FAIL
} from '../constants/authConstants';
import axios from 'axios';


export const userLogin = (loginData) => async (dispatch) => {
    
    try {
        
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:5000/api/users/login', loginData, config)


        const authData = {
            token: data.token,
            role: data.data.role
        }

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: authData
        })

        localStorage.setItem('userInfo', JSON.stringify(authData))

    } catch (error) {

        
        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: resErr
        })
    }

}





export const userGenerateOTP = (datas) => async (dispatch, getState) => {
    
    try {
        
        dispatch({
            type: USER_GENERATE_OTP_REQUEST
        })

        const { userLoginInfo: { info } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info.token}`
            }
        }

        const { data } = await axios.post('http://localhost:5000/api/users/pin', datas, config)


        dispatch({
            type: USER_GENERATE_OTP_SUCCESS,
            payload: data.token
        })

        localStorage.setItem('userPin', data.token)

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_GENERATE_OTP_FAIL,
            payload: resErr
        })
    }

}

