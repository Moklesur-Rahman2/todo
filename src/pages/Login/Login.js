import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import GoogleLogin from '../../share/GoogleLogin/GoogleLogin';
import Loading from '../../share/Loading/Loading';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState([])
    const { register, handleSubmit, reset, watch } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    if (loading) {
        return <Loading />
    }
    // Submit login form
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };

    if (user) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successfully'
        })
        navigate('/home')
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        Swal.fire({
            icon: 'info',
            title: `${error?.message}`
        })

    }


    // Handle forget password
    const handleForgetPass = () => {
        if (watch().email.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Please put your email'
            })
        } else {
            sendPasswordResetEmail(watch().email)
            Swal.fire({
                icon: 'success',
                title: 'Reset Password send sucessfully'
            })
        }
    }

    return (
        <section>
            <div className="container py-32">
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col align-middle items-center w-11/12 lg:w-5/12 mx-auto'>
                    <input className='input input-bordered w-full mb-3' {...register("email")} placeholder='Email' name='email' required />

                    <input className='input input-bordered w-full mb-3' {...register("password")} placeholder='Password' required />

                    <span className=' underline cursor-pointer' onClick={handleForgetPass}>Forget Password?</span>

                    <input className='btn btn-primary w-full my-3' type="submit" value='Login' />

                    <span>New to doctors portal? <Link to='/signup' className='text-secondary'>Create New Account</Link></span>
                </form>
                <div className="social-login w-6/12 mx-auto">
                    <div className="divider">OR</div>
                    <GoogleLogin />
                </div>

            </div>
        </section>
    );
};

export default Login;