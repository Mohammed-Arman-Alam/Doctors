import React from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';


const Navbar = () => {

    const link = <>
        <ul className="flex justify-between text-lg font-medium">
            <NavLink to="/" className={({isActive})=>isActive ? 'border-b-2 border-red-400 text-red-400 font-bold' : ""}>Home</NavLink>
            <NavLink to="/booking" className={({isActive})=>isActive ? 'border-b-2 border-red-400 text-red-400 font-bold' : ""}><li>My-Booking</li></NavLink>
            <NavLink to="/blogs" className={({isActive})=>isActive ? 'border-b-2 border-red-400 text-red-400 font-bold' : ""}><li>Blogs</li></NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive ? 'border-b-2 border-red-400 text-red-400 font-bold' : ""}><li>Contact Us</li></NavLink>
        </ul>
    
    </>
    return (
    <div>
        <div className="navbar w-10/12 mx-auto h-20">
            <div className="navbar-start">
                <a className="btn btn-ghost text-[32px] font-extrabold"><img className='h-9 -ml-2' src={logo} alt="logo" />Doctors</a>
            </div>
            <div className='w-7/12'>
                {link}
            </div>
            <div className="navbar-end">
                <a className="btn h-14 bg-[#176AE5] rounded-4xl text-[#FFFFFF] text-xl font-bold px-8">Emergency</a>
            </div>
        </div>
    </div>  
    );
};
export default Navbar;