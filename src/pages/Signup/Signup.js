import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import GoogleLogin from '../../share/GoogleLogin/GoogleLogin';

const Signup = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    // Submit sign up form
    const onSubmit = async data => {
        Swal.fire({
            icon: 'info',
            title: 'Verify email',
            text: 'Please check your email and verify your email address'
        }
        )
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        await sendEmailVerification(true)
        reset()
        navigate('/home')

    }
    return (
        <section>
            <div className="container py-32">
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col align-middle items-center w-11/12 lg:w-5/12 mx-auto'>
                    <input className='input input-bordered w-full mb-3' {...register("name")} placeholder='Your Name' required />
                    <input className='input input-bordered w-full mb-3' {...register("email")} placeholder='Email Address' required />
                    <input className='input input-bordered w-full mb-3' {...register("password")} placeholder='Password' required />

                    <input className='btn btn-primary w-full my-3' type="submit" value='Sign up' />
                    <span>Already have an account? <Link to='/login' className='text-secondary'>Login now</Link></span>

                </form>
                <div className="social-login w-6/12 mx-auto">
                    <div className="divider">OR</div>
                    <GoogleLogin />
                </div>
            </div>
        </section>
    );
};

export default Signup;