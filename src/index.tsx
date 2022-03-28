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
import ProjectFive from './project5(shopping-cart)/app';
import AppQuiz from './project7(quiz)/app';
import AppPiano from './project8(piano)/app';
import ProjectCalendar from './project9(calendar)/app';
import Project10 from './project10(codevolutionBasic)/app';
import NotesApps from './project11(notes)/app';
import {App12} from './project12(task list)/index';
import Project13 from './project13(contactApp)';
import AddPost from './project13(contactApp)/pages/addPost';
import EditContactPage from './project13(contactApp)/pages/editContact';
import { Provider } from 'react-redux';
import AppStore13 from './project13(contactApp)/states/store';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={AppStore13}>
          <Routes>
            <Route path='/' element={<App/>} />
            {/* <Route path='/project2' element={<ProjectTwo/>} /> */}
            <Route path='/project3' element={<ProjectThree/>} />

            <Route path='/project4' element={<ProjectFour/>}/>
            <Route path='/project4/:id' element={<PagePersonDetail/>} />
            <Route path='/project5' element={<ProjectFive/>}/>
            <Route path='/project7' element={<AppQuiz/>}/>
            <Route path='/project8' element={<AppPiano/>}/>
            <Route path='/project9' element={<ProjectCalendar/>}/>
            <Route path='/project10' element={<Project10/>}/>
            <Route path='/project11' element={<NotesApps/>}/>
            {/* <Route path='/project12' element={<App12/>}/> */}
            <Route path="/project13">
              <Route index={true} element={<Project13/>}/>
              <Route path='add' element={<AddPost/>} />
              <Route path='edit/:id' element={<EditContactPage/>} />
            </Route>
          </Routes>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

