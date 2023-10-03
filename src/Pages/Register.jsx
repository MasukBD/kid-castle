import React, { useContext, useState } from 'react';
import backgroundImage1 from '../assets/login/login-desktop.png';
import backgroundImage2 from '../assets/login/login-mobile.png';
import googleicon from '../assets/logo/google.png';
import UseTitle from '../CustomHooks/UseTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('');

    const { createWithEmailAndPassword, googleSignIn } = useContext(AuthContext);

    const handleRegisterPage = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if (password < 6) {
            setError('Error: Password should be atlest 6 character!')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Error: Password should include atleast one number!')
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Error: Password should include atleast one Uppercase letter!')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Error: Password should include atleast one special character '@#$&*'!")
            return;
        }
        createWithEmailAndPassword(email, password)
            .then(result => {
                const signedUser = result.user;
                updateProfile(signedUser, {
                    displayName: name, photoURL: photo
                });
                sendEmailVerification(signedUser)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'A verification Email sent to your Email!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    })
                setError('');
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleSignedUser = result.user;
                toast.success("SignIn Successfull!");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    UseTitle('Register');
    return (
        <>
            <div className='relative'>
                <img className='hidden md:block max-h-fit w-full' src={backgroundImage1} alt="" />
                <img className='md:hidden max-h-fit w-full' src={backgroundImage2} alt="" />
                <div className='absolute top-10 w-full md:w-1/2 mx-auto p-3'>
                    <div className='p-4 border mb-3 border-black rounded-md'>
                        <h1 className='text-4xl font-bold text-center'>Register</h1>
                        <form onSubmit={handleRegisterPage} className='space-y-2'>
                            <div className='space-y-1'>
                                <label className='font-semibold' htmlFor="name">Name</label> <br />
                                <input className='w-full border p-2 rounded' type="text" name="name" id="name" placeholder='Enter Your Name' />
                            </div>
                            <div className='space-y-1'>
                                <label className='font-semibold' htmlFor="email">Email</label> <br />
                                <input className='w-full border p-2 rounded' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                            </div>
                            <div className='space-y-1'>
                                <label className='font-semibold' htmlFor="email">Password</label> <br />
                                <input className='w-full border p-2 rounded' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                            </div>
                            {
                                error && <p className='font-semibold my-1 text-error'>{error}</p>
                            }
                            <div className='space-y-1'>
                                <label className='font-semibold' htmlFor="photo">Photo URL</label> <br />
                                <input className='w-full border p-2 rounded' type="text" name="photo" id="photo" placeholder='Enter Your Photo URL' required />
                            </div>
                            <div className='flex items-center gap-0 lg:gap-2'>
                                <input type="checkbox" name="checkbox" id="" />
                                <span>Accept Term and Conditions</span>
                                <a className='text-blue-600 underline text-sm' href="#">Learn More</a>
                            </div>
                            <div>
                                <input className='custom-btn' type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-2'>Already have an Account? <Link className='text-blue-600' to="/login">Login</Link></p>
                        <div className="divider">or</div>
                        <div className='flex items-center justify-center'>
                            <button onClick={handleGoogleSignIn} className='flex font-bold items-center gap-2 border-2 hover:bg-pink-700 hover:text-white p-2 rounded-md'><img className='w-6' src={googleicon} alt="" />Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;