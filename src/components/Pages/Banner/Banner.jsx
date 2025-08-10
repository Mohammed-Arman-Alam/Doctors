import React from 'react';
import banner_img from '../../../assets/banner-img-1.png';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto border-2 border-[#FCFCFC] rounded-2xl px-[80px] py-[55px] bg-gradient-to-b from-[#EFEFEF] to-[#FCFCFC] text-center mt-5'>
            <h1 className='text-5xl font-extrabold text-[#0F0F0F]'><span className='whitespace-nowrap'>Dependable Care, Backed by Trusted</span><br /> Professionals.</h1>
            <p className='text-[16px] font-medium text-[#0F0F0F80] my-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <form action="">
                <input type="text" placeholder='Search any doctor..' className='bg-[#ffffff] text-[#9CA3AF] text-[14px] w-6/12 h-12 px-5 rounded-4xl mr-3' />
                <button className='btn text-xl font-bold text-[#FFFFFF] bg-[#176AE5] rounded-4xl px-6 h-12 ml-3'>Search Now</button>
            </form>
            <div className='flex gap-4 justify-center mt-5'>
                <img src={banner_img} alt="" className='w-5/12'/>
                <img src={banner_img} alt="" className='w-5/12'/>
            </div>
        </div>
    );
};

export default Banner;