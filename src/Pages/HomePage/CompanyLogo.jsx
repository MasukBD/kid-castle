import React from 'react';
import logo1 from '../../assets/home/company/home-logo-1.png';
import logo2 from '../../assets/home/company/home-logo-2.png';
import logo3 from '../../assets/home/company/home-logo-3.png';
import logo4 from '../../assets/home/company/home-logo-4.png';
import logo5 from '../../assets/home/company/home-logo-5.png';

const CompanyLogo = () => {
    return (
        <div className='w-full px-4 md:px-0 flex justify-around gap-5 items-center flex-col md:flex-row lg:w-11/12 mx-auto my-6 md:my-16'>
            <a target='_blank' href="https://www.daraz.com.bd/baby-toddler-toys-games/"><img className='w-40' src={logo1} alt="" /></a>
            <a target='_blank' href="https://babyshop.com.bd/"><img className='w-40' src={logo2} alt="" /></a>
            <a target='_blank' href="https://babyshop.com.bd/"><img className='w-40' src={logo3} alt="" /></a>
            <a target='_blank' href="https://babyshop.com.bd/"><img className='w-40' src={logo4} alt="" /></a>
            <a target='_blank' href="https://babyshop.com.bd/"><img className='w-40' src={logo5} alt="" /></a>
        </div>
    );
};

export default CompanyLogo;