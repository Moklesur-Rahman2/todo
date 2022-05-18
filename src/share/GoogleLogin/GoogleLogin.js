import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Login with google
    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className=' text-center'>
            <button onClick={handleGoogleLogin} className="btn btn-outline">Continue with google</button>
        </div>
    );
};

export default GoogleLogin;