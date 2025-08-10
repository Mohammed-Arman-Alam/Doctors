import { toast } from 'react-toastify';
const getBookedAppoinment = () =>{
    const bookedAppointmentSTR = localStorage.getItem("bookedDoctors");

    if(bookedAppointmentSTR){
        const storedAppoinments = JSON.parse(bookedAppointmentSTR);
        return storedAppoinments;
    }
    else{
        return [];
    }

}
const addToStoredDB = (id, name , navigate) =>{
  const storedAppoinments = getBookedAppoinment();
  if(storedAppoinments.includes(id)){
    toast.error(`You already booked an appointment with ${name}`);
  }
  else{
    storedAppoinments.push(id);
    const data = JSON.stringify(storedAppoinments);
    localStorage.setItem("bookedDoctors", data);
    toast.success(`Successfullly booked Appointment with ${name}`);
    setTimeout(() => {
    navigate('/booking');
    }, 1000); 
}
}

export {addToStoredDB, getBookedAppoinment};