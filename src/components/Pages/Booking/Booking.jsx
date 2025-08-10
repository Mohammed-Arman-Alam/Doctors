import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getBookedAppoinment } from '../storage/addToDB';

const Booking = () => {
    const data = useLoaderData();
    const [bookedDoctors, setBookedDoctors] = useState([]);
    useEffect(()=>{
        const id = getBookedAppoinment();
        const myBooking = data.filter(doctor=>id.includes(doctor.registrationNumber));
        setBookedDoctors(myBooking);
        
       
    },[])
    const handleCancelAppoinment = reg =>{
        const storedAppointments = getBookedAppoinment().filter(doctorId => doctorId !== reg);
        const data = JSON.stringify(storedAppointments);
        console.log(data);
        localStorage.setItem("bookedDoctors", data);
        setBookedDoctors(newDoc => newDoc.filter(doc =>doc.registrationNumber !==reg ));
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div>
            </div> 
            <div>
                <h1 className='text-[40px] font-extrabold text-center my-3'>My Todays Appointments</h1>
                <p className='text-[16px] text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='mx-auto'>
        
                {   (bookedDoctors.length) ?( 
                    bookedDoctors.map((doctor, index)=>
                    <div key={index} className='bg-white my-5 rounded-2xl p-6'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-xl font-bold'>{doctor.name}</h1>
                                <p className='text-lg text-[#0F0F0F60]'>{doctor.education}</p>
                            </div>
                            <div>
                                <p className='text-lg text-[#0F0F0F60]'>Appointment Fee: {doctor.consultancyFee}Taka + Vat</p>
                            </div>
                        </div>
                        <hr className='border-dashed border-[#0F0F0F20] my-3'/>
                        <button onClick={()=>handleCancelAppoinment(doctor.registrationNumber)} className='text-xl text-[#FF0000] font-semibold btn border-[#FF0000] rounded-4xl w-full'>cancel Appoinment</button>
                    </div>)
                ) :
                <div className='w-4/12 mx-auto mt-10'>
                    <Link to='/'><button className='btn w-full bg-[#176AE520] border-[#176AE570] rounded-4xl text-2xl font-bold text-[#176AE5]'>Back To Home</button></Link>
                </div>
                
                
                    
                }
            </div>
        </div>
    );
};
export default Booking;