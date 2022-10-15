import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/authActions';

const UserModel = ({ profile, logout, user }) => {

    const logoutHandler = () => {
        logout()
    }

    const { userInfo } = user;
    
    return (
        <div className={ profile ? "z-50 my-4 text-base list-none bg-white sen-font rounded divide-y divide-gray-100 shadow showModel__box" : "hidden" }>
            <div className="py-3 px-4 text-md text-left">
                <span className="block">{userInfo && userInfo.reg_no}</span> 
                <span className="block font-semibold my-1">{userInfo && userInfo.name}</span>
                <span className="block font-semibold truncate">{userInfo && userInfo.email}</span>
            </div>
            <ul className="py-1 text-md text-left">
                <li>
                    <Link to='/profile' className="block py-2 px-4 hover:bg-gray-200 ">Profile</Link>
                </li>
                <li>
                    <button onClick={logoutHandler} className="block py-2 px-4 w-full text-left hover:bg-rose-600">Sign out</button>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, { logout })(UserModel);