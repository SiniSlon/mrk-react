import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router';
import { putUser } from './store/reducers/user';
import { getUser } from './api/users';
import { useAppDispatch } from './store/hooks';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';

import Post from './pages/Post/Post';
import Sessions from './pages/Post/Sessions';
import ConnectDB from './pages/Post/ConnectDB';
import Settings from './pages/Post/Settings';
import Media from './pages/Post/Media';
import Map from './pages/Post/Map';
import Analitic from './pages/Post/Analitic';
import Search from './pages/Post/Search';
import LoadData from './pages/Upload/UploadHistory';
import Database from './pages/Database/Database';

import AdminPanel from './pages/AdminPanel/AdminPanel';
import LogsAdmin from './pages/AdminPanel/LogsAdmin';
import AddUser from './pages/AdminPanel/AddUser';
import EditUser from './pages/AdminPanel/EditUser';
import Queque from './pages/Upload/UploadQueue';
import SettingsReport from './pages/AdminPanel/SettingsReports';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/post'/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/post' element={<Post/>}/>
      <Route path='/post/sessions' element={<Sessions/>}/>
      <Route path='/post/database' element={<ConnectDB/>}/>
      <Route path='/post/settings' element={<Settings/>}/>
      <Route path='/post/media' element={<Media/>}/>
      <Route path='/post/maps' element={<Map/>}/>
      <Route path='/post/analitic' element={<Analitic/>}/>
      <Route path='/post/search' element={<Search/>} />

      <Route path='/upload' element={<LoadData/>}/>
      <Route path='/upload/queue' element={<Queque/>}/>

      <Route path='/database' element={<Database/>}/>

      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/adminpanel/logs' element={<LogsAdmin/>}/>
      <Route path='/adminpanel/adduser' element={<AddUser/>}/>
      <Route path='/adminpanel/edituser/:userName' element={<EditUser/>}/>
      <Route path='/adminpanel/reports' element={<SettingsReport/>}/>
    </Routes>
  );
}

export default App;
