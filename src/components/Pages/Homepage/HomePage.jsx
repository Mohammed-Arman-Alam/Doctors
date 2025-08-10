import React from 'react';
import Banner from '../Banner/Banner';
import MedicalServices from '../MedicalServices/MedicalServices';
import Doctors from '../Doctors/Doctors';

const HomePage = () => {
    return (
        <>
          <Banner></Banner>
          <Doctors></Doctors>
          <MedicalServices></MedicalServices>  
        </>
    );
};

export default HomePage;