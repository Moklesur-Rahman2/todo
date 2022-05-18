import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../share/Loading/Loading';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    // // const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAuth;

//  state={{ from: location }} replace 