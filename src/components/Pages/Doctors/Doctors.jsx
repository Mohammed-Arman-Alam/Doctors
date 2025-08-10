import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [viewAll, setViewAll] = useState(false);
    const AllDoctors = viewAll ? doctorsData : doctorsData.slice(0,6);
    useEffect(()=>{
        fetch('doctorsData.json')
        .then(res => res.json())
        .then(data=>setDoctorsData(data))
    },[]);
    return (
        <div className='w-10/12 mx-auto my-15'>
            <h1 className='text-[#0F0F0F] text-[40px] font-extrabold text-center'>Our Best Doctors</h1>
            <p className='text-[#0F0F0F80] text-[16px] text-center w-[950px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-3 gap-4 mt-8'>
                {
                    AllDoctors.map((data, index)=><Doctor key={index} data={data}></Doctor>)
                }
            </div>
            <div className='w-[220px] mx-auto'>
                <button onClick={()=>setViewAll(!viewAll)} className='btn rounded-4xl py-6 px-8 bg-[#176AE5] text-[#FFFFFF] font-bold text-lg mt-8'>
                    {
                      viewAll ?  "Show Less" : "View All Doctors"
                    }</button>
            </div>
            
        </div>
    );
};

export default Doctors;