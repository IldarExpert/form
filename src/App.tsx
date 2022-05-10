import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/page-not-found/page-not-found';
import ProfileScreen from './pages/profile-screen/profile-screen';
import UserListScreen from './pages/user-list-screen/user-list-screen';
import './styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<UserListScreen/>}/>
          <Route path={'/profile/:id'} element={<ProfileScreen/>}/>
          <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
