import * as React from 'react';
import { Provider } from 'react-redux';
import Apps13 from './app';
import AppStore13 from './states/store';
import 'react-toastify/dist/ReactToastify.css';

interface IProject13Props {
}

const Project13: React.FunctionComponent<IProject13Props> = (props) => {
  return(
    <Provider store={AppStore13}>
      <Apps13/>
    </Provider>
  )
};

export default Project13;
