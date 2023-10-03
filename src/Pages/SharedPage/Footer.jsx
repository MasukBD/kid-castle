import React from 'react';
import companylogo from '../../assets/logo/footerlogo.png';
import facbook from '../../assets/logo/facebook.png';
import instagram from '../../assets/logo//instagram.png';
import twiter from '../../assets/logo/twitter.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-pink-100 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Order Track</a>
                    <a className="link link-hover">Bussiness Account</a>
                    <a className="link link-hover">Publisher Zone</a>
                    <a className="link link-hover">Help Desk</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-pink-100 text-base-content border-base-600 flex justify-between flex-col items-center lg:flex-row">
                <aside className="items-center flex">
                    <img className='w-1/6' src={companylogo} alt="" />
                    <p>Kids Castle Ltd. <br />Providing reliable Service since 1992. ©All Right Reserved to Ilius Mahfuz!</p>
                </aside>
                <div className='flex w-full lg:w-1/4'>
                    <a href=""><img className='w-1/3' src={facbook} alt="" /></a>
                    <a href=""><img className='w-1/3' src={instagram} alt="" /></a>
                    <a href=""><img className='w-1/3' src={twiter} alt="" /></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;