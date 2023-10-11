import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../assets/logo/headerlogo.png';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('LogOut Successfull!')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="navbar bg-pink-100 ps-5 lg:px-9 sticky top-0 z-10">
            <Link className='navbar-start' to="/"><img src={navLogo} alt="Navbar icon" /></Link>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] mt-2 p-2 shadow bg-pink-100 rounded">
                        {
                            user && <div className='flex justify-center my-1'><img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} alt="" /></div>
                        }
                        <li className='px-2 py-0.5'><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Home</NavLink></li>
                        {
                            user && <li className='px-2 py-0.5'><NavLink to="/myToys" className={({ isActive }) => (isActive ? 'active' : 'defult')}>My Toys</NavLink></li>
                        }
                        {
                            user && <li className='px-2 py-0.5'><NavLink to="/addAToy" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Add A Toy</NavLink></li>
                        }
                        <li className='px-2 py-0.5'><NavLink to="/allToys" className={({ isActive }) => (isActive ? 'active' : 'defult')}>All Toys</NavLink></li>
                        <li className='px-2 py-0.5'><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Blogs</NavLink></li>
                        {
                            user ? <button onClick={handleLogOut} className='px-2 py-0.5 font-bold hover:text-pink-600'>Log&nbsp;Out</button> : <li className='px-2 py-0.5'><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Login</NavLink></li>
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="flex items-center">
                    {
                        user && <img title={user.displayName} className='w-11 rounded-full' src={user.photoURL} alt="" />
                    }
                    <li className='ml-8'><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Home</NavLink></li>
                    {
                        user && <li className='ml-8'><NavLink to="/myToys" className={({ isActive }) => (isActive ? 'active' : 'defult')}>My&nbsp;Toys</NavLink></li>
                    }
                    {
                        user && <li className='ml-8'><NavLink to="/addAToy" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Add&nbsp;A&nbsp;Toy</NavLink></li>
                    }
                    <li className='ml-8'><NavLink to="/allToys" className={({ isActive }) => (isActive ? 'active' : 'defult')}>All&nbsp;Toys</NavLink></li>
                    <li className='ml-8'><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Blogs</NavLink></li>
                    {
                        user ? <button onClick={handleLogOut} className='mx-8 font-bold hover:text-pink-600'>Log&nbsp;Out</button> : <li className='ml-8'><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Login</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;