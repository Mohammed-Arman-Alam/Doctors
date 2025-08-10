import React from 'react';
import { Link , NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const link = <>
            <ul className="flex justify-between text-lg font-medium">
                <NavLink to="/" className={({isActive})=>isActive ? 'border-b-2 border-red-400 text-red-400 font-bold' : ""}>Home</NavLink>
                        <li>My-Booking</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                    </>
    return (

    <footer className="bg-[#FFFFFF] w-full p-10 mb-10 mt-14">
        
        <div className="text-center my-6">
            <a className="btn btn-ghost text-[32px] font-extrabold">
                <img className='h-9' src={logo} alt="logo" />Doctors
            </a>
        </div>
        <div className='w-6/12 mx-auto'>
            {link}
        </div>
        <hr className='w-8/12 mx-auto my-8 text-[#0F0F0F20]' /> 
        <div>
            <ul className="flex justify-between w-4/12 mx-auto">
                <li><SocialIcon url='https://www.facebook.com/' target="_blank" bgColor='#006AFF' style={{ height: 36, width: 36 }}></SocialIcon></li>
                <li><SocialIcon url='https://x.com/' target="_blank" style={{ height: 36, width: 36 }}></SocialIcon></li>
                <li><SocialIcon url='https://github.com/Mohammed-Arman-Alam' target="_blank" style={{ height: 36, width: 36 }}></SocialIcon></li>
                <li><SocialIcon url='https://www.youtube.com/' target="_blank" style={{ height: 36, width: 36 }}></SocialIcon></li>
            </ul>
        </div>
    </footer>
    );
};

export default Footer;