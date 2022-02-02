import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import '../../node_modules/bulma/css/bulma.min.css';

const ProjectTwo:React.FC = () => {
  return(
    <Provider store={store}>
      <h2>Hello word</h2>
    </Provider>
  )
}

export default ProjectTwo;