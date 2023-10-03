import React from 'react';
import image from '../assets/ErrorPage/errorPage.png';
import UseTitle from '../CustomHooks/UseTitle';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    UseTitle('Error')
    return (
        <>
            <div className='max-h-screen flex items-center justify-center'>
                <img className='w-full lg:w-1/2' src={image} alt="Error" />
            </div>
            <Link className='block text-center' to="/"><button className='btn bg-pink-200'>Back To Homepage <FaArrowRight></FaArrowRight> </button></Link>
        </>
    );
};

export default ErrorPage;