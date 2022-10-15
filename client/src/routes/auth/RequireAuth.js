import React,{ useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
 

const RequireAuth = ({ userLoginInfo, allowRoles }) => {


    const [role, setRole] = useState([{
        name: '',
    }]);

    const location = useLocation();

    const { info:authRole } = userLoginInfo; 

    useEffect(() => {

        if (authRole && authRole.role) {
            setRole([{ name: authRole.role }])
        }else{
            setRole([{ }])
        }
        
    }, [authRole])


    return (
        role.find(val => allowRoles.includes(val.name))
        ? <Outlet />
        : authRole?.role
        ? <Navigate to='/unAuth' state={{ from: location }} replace />
        : <Navigate to='/' state={{ from: location }} replace />
    )
}


const mapStateToProps = (state) => ({
    userLoginInfo: state.userLoginInfo
})


export default connect(mapStateToProps, null)(RequireAuth);