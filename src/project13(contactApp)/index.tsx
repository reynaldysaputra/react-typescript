import * as React from 'react';
import Apps13 from './app';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

interface IProject13Props {
}

const Project13: React.FunctionComponent<IProject13Props> = (props) => {
  return(
    <>
      <ToastContainer/>
      <Apps13/>
    </>
  )
};

export default Project13;
