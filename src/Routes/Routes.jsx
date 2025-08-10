import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../components/Root/Root';
import MedicalServices from '../components/Pages/MedicalServices/MedicalServices';
import HomePage from '../components/Pages/Homepage/HomePage';
import DoctorDetails from '../components/Pages/DoctorDetails/DoctorDetails';
import Booking from '../components/Pages/Booking/Booking';
import Blogs from '../components/Pages/Blogs/Blogs';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        Component: HomePage,
      },
      {
        path:"/booking",
        loader: () => fetch('/doctorsData.json'),
        Component:Booking,
      },
      {
        path:"/details/:reg",
        loader: ()=>fetch('/doctorsData.json'),
        Component:DoctorDetails
      },
      {
        path:"/blogs",
        Component:Blogs,
      }
    ]
  },
]);