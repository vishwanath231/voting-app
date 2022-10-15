import React, { useEffect } from 'react';
import { userLoaded } from './redux/actions/authActions';
import Router from './routes/Router';
import { connect } from 'react-redux';

const App = ({ userLoaded }) => {

    useEffect(() => {
        userLoaded()
     },[userLoaded])

    return (
        <Router />
    )
}

export default connect(null, { userLoaded })(App);