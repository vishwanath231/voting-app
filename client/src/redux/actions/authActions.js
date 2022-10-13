import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOGOUT
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