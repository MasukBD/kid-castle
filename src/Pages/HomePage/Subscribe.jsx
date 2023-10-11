import React from 'react';
import { FaEnvelopeOpenText, FaRegPaperPlane } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <div className='my-8 px-6 md:px-16 py-8 md:py-16 md:my-16 bg-pink-200 flex flex-col md:flex-row items-center justify-center gap-16'>
            <FaEnvelopeOpenText className='text-9xl scale-125 origin-center rotate-45'></FaEnvelopeOpenText>
            <div>
                <h2 className='text-2xl md:text-3xl font-bold'>Subscribe for Newsletter and Offer!</h2>
                <p className='text-center mt-3 mb-5'>SignUp For Ultimate Kid Castle Treasure</p>
                <form>
                    <input className='bg-pink-200 px-2 py-1 w-10/12 border-2 rounded-md' type="email" name="" id="" required placeholder='example@kidcastle.com' />
                    <button title='send' className='px-2'><FaRegPaperPlane></FaRegPaperPlane></button>
                    <div className='my-3 text-center'><input type="checkbox" name="" id="" /><span> Accept our </span><a className='text-blue-500 underline' href="">Term & Condition</a></div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;