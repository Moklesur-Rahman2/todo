import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    // handle sign out
    const handleSignOut = () => {
        signOut(auth)
        navigate('/welcome')
    }
    return (
        <header className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">toDo</Link>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut}>Sign Out</button> :
                            ''
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;