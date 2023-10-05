import React from 'react';
import { FaHeadset, FaUserTie, FaSync, FaTruck, FaRegSmile } from 'react-icons/fa';

const Support = () => {
    return (
        <div className='w-full px-4 md:px-0 flex justify-around gap-5 items-center flex-col md:flex-row lg:w-11/12 mx-auto my-6 md:my-16'>
            <div className='flex flex-col items-center'>
                <FaRegSmile className='text-6xl hover:animate-bounce'></FaRegSmile>
                <h3 className='text-xl font-semibold mt-1'>100% Satisfaction</h3>
                <p>If You Are Unable</p>
            </div>
            <div className='flex flex-col items-center'>
                <FaHeadset className='text-6xl hover:animate-pulse'></FaHeadset>
                <h3 className='text-xl font-semibold mt-1'>Online Support</h3>
                <p>Any Time Support</p>
            </div>
            <div className='flex flex-col items-center'>
                <FaSync className='text-6xl hover:animate-spin'></FaSync>
                <h3 className='text-xl font-semibold mt-1'>Money Returns</h3>
                <p>Guarantee In 7 Days</p>
            </div>
            <div className='flex flex-col items-center'>
                <FaUserTie className='text-6xl hover:animate-pulse'></FaUserTie>
                <h3 className='text-xl font-semibold mt-1'>Membership Award</h3>
                <p>Explore All Product Less</p>
            </div>
            <div className='flex flex-col items-center'>
                <FaTruck className='text-6xl hover:animate-ping'></FaTruck>
                <h3 className='text-xl font-semibold mt-1'>Fastest Delivery</h3>
                <p>Value Your Expectancy</p>
            </div>
        </div>
    );
};

export default Support;