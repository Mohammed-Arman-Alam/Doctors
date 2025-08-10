import React from 'react';
import success_doctor from '../../../assets/success-doctor.png';
import patient from '../../../assets/success-patients.png';
import review from '../../../assets/success-review.png'
import stuff from '../../../assets/success-staffs.png';
import CountUp from 'react-countup';

const MedicalServices = () => {
    return (
        <div className='text-center w-10/12 mx-auto'>
            <h1 className='text-[40px] font-extrabold'>We Provide Best Medical Services</h1>
            <p className='text-[16px] text-[#0F0F0F80] font-normal my-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='flex justify-between mt-6'>
                <div className='bg-white w-2/9 p-5 rounded-2xl'>
                    <img src={success_doctor} alt="doctors" />
                    <p className='text-start text-[#0F0F0F] text-6xl font-bold my-4'>
                        <CountUp end={199} duration={8}></CountUp>+
                    </p>
                    <p className='text-[#0F0F0F60] text-start'>Total Doctors</p>
                </div>
                <div className='bg-white w-2/9 p-5 rounded-2xl'>
                    <img src={review} alt="review" />
                    <p className='text-start text-[#0F0F0F] text-6xl font-bold my-4'>
                        <CountUp end={467} duration={8}></CountUp>+
                    </p>
                    <p className='text-[#0F0F0F60] text-start'>Total Reviews</p>
                </div>
                <div className='bg-white w-2/9 p-5 rounded-2xl'>
                    <img src={patient} alt="patient" />
                    <p className='text-start text-[#0F0F0F] text-6xl font-bold my-4'>
                        <CountUp end={1900} duration={8}></CountUp>+
                    </p>
                    <p className='text-[#0F0F0F60] text-start'>Total Reviews</p>
                </div>
                <div className='bg-white w-2/9 p-5 rounded-2xl'>
                    <img src={stuff} alt="stuff" />
                    <p className='text-start text-[#0F0F0F] text-6xl font-bold my-4'>
                        <CountUp end={300} duration={8}></CountUp>+
                    </p>
                    <p className='text-[#0F0F0F60] text-start'>Total Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalServices;