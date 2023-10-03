import React, { useContext, useState } from 'react';
import backgroundImage1 from '../assets/login/login-desktop.png';
import backgroundImage2 from '../assets/login/login-mobile.png';
import googleicon from '../assets/logo/google.png';
import UseTitle from '../CustomHooks/UseTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Login = () => {
    const { login, googleSignIn, passwordReset } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                toast.success("Login Successfull!");
                setError("");
                form.reset();
            })
            .catch(error => {
                setError('Wrong Email or Password? Please Try Again!');
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const googleSignedUser = result.user;
                toast.success("SignIn Successfull!");
                setError('');
            })
            .catch(error => {
                toast.error(`${error.message} Try again later!`);
            })
    };

    const handleForgetPassword = () => {
        const getEmail = document.getElementById('email').value;
        passwordReset(getEmail)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'A Password Reset Email Sent to Your Email!',
                    icon: 'info',
                    confirmButtonText: 'OK'
                })
                setError('');
            })
            .catch(error => {
                setError('Please Enter Valid Email!');

            })
    }

    UseTitle('login');
    return (
        <div className='relative'>
            <img className='hidden md:block max-h-screen w-full' src={backgroundImage1} alt="" />
            <img className='md:hidden max-h-screen w-full' src={backgroundImage2} alt="" />
            <div className='absolute top-10 w-full md:w-1/2 mx-auto p-3'>
                <div className='p-4 border mb-3 border-black rounded-md'>
                    <h1 className='text-4xl font-bold text-center'>Login</h1>
                    <form onSubmit={handleLogin} className='space-y-4'>
                        <div className='space-y-2'>
                            <label className='font-semibold' htmlFor="email">Email</label> <br />
                            <input className='w-full border p-2 rounded' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                        </div>
                        <div className='space-y-2'>
                            <label className='font-semibold' htmlFor="email">Password</label> <br />
                            <input className='w-full border p-2 rounded' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                        </div>
                        <p onClick={handleForgetPassword} className='text-blue-600 underline text-sm cursor-pointer'>Forget password</p>
                        {
                            error && <p className='text-error font-bold my-1'>{error}</p>
                        }
                        <div>
                            <input className='custom-btn' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-3'>Don't have an Account? <Link className='text-blue-600' to="/register">Register</Link></p>
                    <div className="divider">or</div>
                    <div className='mt-7 mb-3 flex items-center justify-center'>
                        <button onClick={handleGoogleLogIn} className='flex font-bold items-center gap-2 border-2 hover:bg-pink-700 hover:text-white p-2 rounded-md'><img className='w-6' src={googleicon} alt="" />Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;