import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <section className=' min-h-screen flex flex-col justify-center items-center'>
            <div className="container mx-auto">
                <div className="welcome">
                    <h1 className='lg:text-6xl text-3xl text-center'>Welcome to To Do Application</h1>
                </div>
            </div>

            <div className="login mt-8">
                <Link to='/login' className="btn btn-active btn-primary">Login</Link>
                <Link to='/signup' className="btn btn-active btn-secondary ml-5">Sign Up</Link>
            </div>
        </section>
    );
};

export default Welcome;