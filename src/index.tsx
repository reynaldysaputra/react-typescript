import React from 'react';
import ReactDOM from 'react-dom';
import App from './project1/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectTwo from './project2';
import ProjectThree from './project3/app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/project2' element={<ProjectTwo/>} />
        <Route path='/project3' element={<ProjectThree/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

