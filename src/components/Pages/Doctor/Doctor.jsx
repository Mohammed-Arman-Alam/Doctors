import React from 'react';
import { Link } from 'react-router';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctor = ({data}) => {
    const {image, name, education , speciality,experience, registrationNumber} = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-5 rounded-2xl">
                <figure>
                    <img
                    src={image}
                    alt="Doctor"
                    className="rounded-2xl h-[245px]" />
                </figure>
                <div className="">
                    <h4 className='bg-[#176AE520] text-[#176AE5] text-sm w-6/12 px-2 rounded-4xl border border-[#176AE540] mt-3'>{experience} Experience</h4>
                    <h2 className="card-title text-2xl font-extrabold py-3 whitespace-nowrap">{name}</h2>
                    <p className='border-b border-dashed border-[#0F0F0F20] pb-2 text-lg text-[#0F0F0F60]'>{education}</p>
                    <p className='text-[#0F0F0F70] text-lg my-3'>Reg No:{registrationNumber}</p>
                    <Link to={`/details/${registrationNumber}`}><button className="btn w-full rounded-4xl text-[#176AE5] text-xl font-bold border border-[#176AE5]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;