import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';


const userInfoFromStroage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const adminInfoFromStroage = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null;

const initialState = {
    userLoginInfo: {
        info: userInfoFromStroage,
    },
    adminLoginInfo: {
        info: adminInfoFromStroage
    }
};


const middleware = [thunk]

const store = createStore(
    
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;