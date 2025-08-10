import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoredDB } from '../storage/addToDB';
import {ToastContainer} from 'react-toastify';

const DoctorDetails = () => {
    const navigate = useNavigate();
    const id = useParams();
    const data = useLoaderData();
    const doctorId = id.reg;
    const docData = data;
    const doctorDetails = docData.find(doctor => doctor.registrationNumber === doctorId);
    const {image, name, education,speciality, registrationNumber, workplace, availability, consultancyFee} = doctorDetails;

    const handleBookAppoinment = (doctorId, name) =>{
        addToStoredDB(doctorId, name, navigate);
         
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-white rounded-3xl py-12 px-32 text-center'>
                <h1 className='text-3xl font-extrabold'>Doctor's Profile Details</h1>
                <p className='text-sm font-medium text-[#14141470] mt-4'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='bg-white my-4 rounded-3xl p-8 flex gap-8'>
                <div>
                    <img src={image} alt="" className='rounded-2xl h-[360px] w-[335px] object-cover'/>
                    
                </div>
                <div className='w-2/3'>
                    <h1 className='text-3xl font-extrabold my-3'>{name}</h1>
                    <p className='text-[#0F0F0F60] text-lg'>{education}<br/>{speciality}</p>
                    <p className='my-3'>
                        <span className='text-[#0F0F0F50] text-xl'>Working at</span> <br />
                        <span className='text-xl font-bold'>{workplace}</span>
                    </p>
                    <hr className='border-dashed w-full text-[#0F0F0F20]'/>
                    <p className='text-lg text-[#0F0F0F70] my-2'>Reg No: {registrationNumber}</p>
                    <hr className='border-dashed w-full text-[#0F0F0F20]'/>
                    <div className='flex gap-4 my-2 items-center'>
                        <span className='text-[16px] font-bold'>Availability</span>
                        {
                            availability.map((day, index) =><p className='text-[#FFA000] bg-[#FFA00010] border border-[#FFA00020] rounded-4xl px-2 py-1' key={index}>{day}</p>)
                        }
                    </div>
                    <p>
                        <span className='text-[16px] font-bold'>Consultation Fee: </span>
                        <span className='text-[#176AE5] text-[16px] font-extrabold'>Taka: {consultancyFee}</span>
                        <span className='text-[16px] text-[#14141450]'> (incl. Vat)</span>
                        <span className='text-[#176AE5] text-[16px]'> Per consultation</span>
                    </p>
                </div>
            </div>
            <div className='bg-white rounded-3xl py-4 px-6'>
                <h1 className='text-center text-2xl font-extrabold'>Book an Appointment</h1>
                <hr className='border border-dashed text-[#0F0F0F20] my-3'/>
                <div className='flex justify-between'>
                    <h3 className='text-[#0F0F0F] text-lg font-bold'>Availability</h3>
                    <p className='text-[#09982F] text-sm bg-[#09982F10] border border-[#09982F20] rounded-4xl py-1 px-3'>Doctor Available Today</p>
                </div>
                <hr className='border border-dashed text-[#0F0F0F20] my-3'/>
                <p className='text-[16px] text-[#FFA000] text-center bg-[#FFA00010] border border-[#FFA00020] rounded-4xl mb-5 p-2'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <button onClick={()=>handleBookAppoinment(doctorId,name)} className='btn text-center w-full bg-[#176AE5] rounded-4xl font-bold text-[20px] text-[#FFFFFF] py-5 mb-6'>Book Appoinment Now</button>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default DoctorDetails;

// education

// experience

// name

// registrationNumber

// speciality
