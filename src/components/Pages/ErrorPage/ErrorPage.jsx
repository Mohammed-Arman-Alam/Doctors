import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-4/12 mx-auto mt-10'>
        <h1 className='text-9xl font-bold text-red-400 my-20 text-center'>Error</h1>
        <Link to='/'><button className='btn w-full bg-[#176AE520] border-[#176AE570] rounded-4xl text-2xl font-bold text-[#176AE5]'>Back To Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;