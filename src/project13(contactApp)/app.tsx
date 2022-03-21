import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import Home from './pages/home';
import './style.css';

const Apps13 = () => {

  return(
    <div>
      <ToastContainer/>
      <Navbar/>
      <Home/>
    </div>
  )
};

export default Apps13;
