import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getBookedAppoinment } from '../storage/addToDB';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
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
    if(bookedDoctors.length){
    return (
        
        <div className='w-10/12 mx-auto'>
            
            <div className='bg-white rounded-xl mt-10 mb-16'>
                <BarChart className='w-full'
                width={1000}
                height={400}
                data={bookedDoctors}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="consultancyFee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {bookedDoctors.map((doctor, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
            </div> 
            <div>
                <h1 className='text-[40px] font-extrabold text-center my-3'>My Todays Appointments</h1>
                <p className='text-[16px] text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='mx-auto'>
        
                { 
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
                }
            </div>
        </div>
    );}
    else{
      return(
        <>
          <div className='mt-10'>
              <h1 className='text-[40px] font-extrabold text-center my-3'>You Have not Booked any appointment yet</h1>
              <p className='text-[16px] text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          </div>
          <div className='w-4/12 mx-auto mt-10'>
            <Link to='/'><button className='btn w-full bg-[#176AE520] border-[#176AE570] rounded-4xl text-2xl font-bold text-[#176AE5]'>Back To Home</button></Link>
          </div>
        </>
      
            
            
      );
    }
};
export default Booking;