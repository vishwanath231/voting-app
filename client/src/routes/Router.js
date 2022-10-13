import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CLIENT
import LoginScreen from '../screens/client/auth/LoginScreen';
import UserGenerateOtpScreen from '../screens/client/auth/UserGenerateOtpScreen';
import VerfiyOptScreen from '../screens/client/auth/VerfiyOptScreen';
import HomeScreen from '../screens/client/HomeScreen';

// ADMIN
import AdminDashboard from '../screens/admin/DashboardScreen';

// AUTH 
import RouterLayout from './auth/RouterLayout';
import RequireAuth from './auth/RequireAuth';

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
                    <Route path='/home' element={<HomeScreen /> } />
                    <Route path='/generate' element={<UserGenerateOtpScreen /> } />
                    <Route path='/verfiy' element={<VerfiyOptScreen /> } />
                
                
                    {/* AUTH */}
                    <Route path='unAuth' element={<UnauthorizedPage /> } />


                    {/* ADMIN */}
                    {/* <Route element={ <RequireAuth allowRoles={'admin'} /> } >
                        <Route path='admin/dashboard' element={ <AdminDashboard /> } /> 
                    </Route> */}


                    {/* NOT FOUND PAGE */}
                    <Route path='*' element={ <NotFoundPage /> } />

                </Route>
            </Routes>
            {/* <CopyRights /> */}
        </BrowserRouter>
    )
}

export default Router;