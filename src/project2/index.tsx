import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store, { RootState } from './store';
import App from './app';
import '../../node_modules/bulma/css/bulma.min.css';

const ProjectTwo: FC = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default ProjectTwo;