import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CLIENT
import LoginScreen from '../screens/client/auth/LoginScreen';
import UserGenerateOtpScreen from '../screens/client/auth/UserGenerateOtpScreen';
import VerifyOtpScreen from '../screens/client/auth/VerifyOtpScreen';
import HomeScreen from '../screens/client/HomeScreen';

// ADMIN
import AdminLoginScreen from '../screens/admin/auth/AdminLoginScreen';
import DashboardScreen from '../screens/admin/DashboardScreen';
import VoteScreen from '../screens/admin/VoteScreen';
import UserListScreen from '../screens/admin/UserListScreen';
import UserDetailsScreen from '../screens/admin/UserDetailsScreen';
import AdminNominationListScreen from '../screens/admin/AdminNominationListScreen';
import NominationDetailsScreen from '../screens/admin/NominationDetailsScreen';



// AUTH 
import RouterLayout from './auth/RouterLayout';
import RequireAuth from './auth/RequireAuth';
import RequireLogin from './auth/RequireLogin';
import RequireGenerateOtp from './auth/RequireGenerateOtp';
import RequireVerifyOtp from './auth/RequireVerifyOtp';

// PAGES
import NotFoundPage from './pages/NotFoundPage';
import UnauthorizedPage from './pages/UnauthorizedPage';


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <RouterLayout /> } >
               
                    {/* CLIENT */}
                    <Route path='/' element={<LoginScreen /> } />

                    <Route path='admin/login' element={ <AdminLoginScreen /> }  />


                    <Route element={ <RequireAuth allowRoles={'user'} /> }>

                        <Route element={ <RequireLogin /> } >
                            <Route path='generate' element={<UserGenerateOtpScreen /> } />
                        </Route>

                        <Route element={ <RequireGenerateOtp /> } >
                            <Route path='verify' element={<VerifyOtpScreen /> } />
                        </Route>

                        <Route element={ <RequireVerifyOtp /> } >
                            <Route path='home' element={<HomeScreen /> } />
                        </Route>

                    </Route>

                
                    {/* AUTH */}
                    <Route path='unAuth' element={<UnauthorizedPage /> } />


                    {/* ADMIN */}
                    <Route element={ <RequireAuth allowRoles={'admin'} /> } >
                        <Route path='admin/dashboard' element={ <DashboardScreen /> } /> 
                        <Route path='admin/vote' element={ <VoteScreen /> } /> 
                        <Route path='admin/userList' element={ <UserListScreen /> } /> 
                        <Route path='admin/user/:id' element={ <UserDetailsScreen /> } /> 
                        <Route path='admin/nominationList' element={ <AdminNominationListScreen /> } /> 
                        <Route path='admin/nomination/:id' element={ <NominationDetailsScreen /> } /> 
                    </Route>


                    {/* NOT FOUND PAGE */}
                    <Route path='*' element={ <NotFoundPage /> } />

                </Route>
            </Routes>
            {/* <CopyRights /> */}
        </BrowserRouter>
    )
}

export default Router;