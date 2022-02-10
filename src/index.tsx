import React from 'react';
import ReactDOM from 'react-dom';
import App from './project1/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectTwo from './project2';
import ProjectThree from './project3/app';
import ProjectFour from './project4/app';
import PagePersonDetail from './project4/pages/person/pagePersonDetail';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/project2' element={<ProjectTwo/>} />
          <Route path='/project3' element={<ProjectThree/>} />

            <Route path='/project4' element={<ProjectFour/>}/>
            <Route path='/project4/:id' element={<PagePersonDetail/>} />
          </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

