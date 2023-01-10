import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Route, Routes,useLocation} from 'react-router';
import { putUser } from './store/reducers/user';
import { getUser } from './api/services/users';
import { putLog } from './store/reducers/log';
import { useAppDispatch } from './store/hooks';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';

import Handbook from './pages/Handbook/Handbook'
import HandbooksRegions from './pages/Handbook/Handbooks/HandbooksRegions';
import HandbooksPhones from './pages/Handbook/Handbooks/HandbooksPhones';
import HandbookImport from './pages/Handbook/Import/HandbookImport';
import HandbookSettings from './pages/Handbook/Settings/HandbookSettings';
import Handbooks from './pages/Handbook/Handbooks/Handbooks';
import HandbooksSystem from './pages/Handbook/Handbooks/HandbooksSystem';
import HandbooksOperator from './pages/Handbook/Handbooks/HandbooksOperator';
import HandbooksImsi from './pages/Handbook/Handbooks/HandbooksImsi';
import HandbooksImei from './pages/Handbook/Handbooks/HandbooksIemi';
import HandbooksIspc from './pages/Handbook/Handbooks/HandbooksIspc';
import HandbooksIp from './pages/Handbook/Handbooks/HandbooksIp';
import HandbooksOrientir from './pages/Handbook/Handbooks/HandbooksOrientir';
import HandbooksStation from './pages/Handbook/Handbooks/HandbooksStation';
import HandbooksCalendar from './pages/Handbook/Handbooks/HandbooksCalendar';
import NetAbonents from './pages/Post/components/NetAbonents';
import Catalog from './pages/Catalog/Catalog'

import Post from './pages/Post/Post';
import Sessions from './pages/Post/Sessions';
import ConnectDB from './pages/Post/ConnectDB';
import Settings from './pages/Post/Settings';
import Media from './pages/Post/Media';
import Map from './pages/Post/Map';
import Analitic from './pages/Post/Analitic';
import Search from './pages/Post/Search';
import LoadData from './pages/Upload/UploadHistory';

import AdminPanel from './pages/AdminPanel/AdminPanel';
import LogsAdmin from './pages/AdminPanel/LogsAdmin';
import AddUser from './pages/AdminPanel/AddUser';
import EditUser from './pages/AdminPanel/EditUser';
import Queque from './pages/Upload/UploadQueue';
import AdminReport from './pages/AdminPanel/AdminReport';
import getFullDate from './utils/getFullDate';

const App = () => {
  const location = useLocation();
  const locate = location.pathname + " "

  const dispatch = useAppDispatch();

  useEffect(() => {
    const log = {
      location: locate, date: getFullDate()
    }
      dispatch(putLog(log))
  }, [locate])

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/post'/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/post' element={<Post/>}/>
      <Route path='/post/sessions' element={<Sessions/>}/>
      <Route path='/post/database' element={<ConnectDB/>}/>
      <Route path='/post/search' element={<Search/>} /> 
      <Route path='/post/settings' element={<Settings/>}/>
      <Route path='/post/media' element={<Media/>}/>
      <Route path='/post/maps' element={<Map/>}/>
      
      <Route path='/post/net' element={<NetAbonents/>}/>
      <Route path='/post/analitic' element={<Analitic/>}/>

      <Route path='/upload' element={<LoadData/>}/>
      <Route path='/upload/queue' element={<Queque/>}/>

      <Route path='/handbook' element={<Handbook/>}/>
      <Route path='/handbooks' element={<Handbooks/>}/>
      <Route path='/handbooks/regions' element={<HandbooksRegions/>}/>
      <Route path='/handbooks/phones' element={<HandbooksPhones/>}/>
      <Route path='/handbooks/system' element={<HandbooksSystem/>}/>
      <Route path='/handbooks/operator' element={<HandbooksOperator/>}/>
      <Route path='/handbooks/imsi' element={<HandbooksImsi/>}/>
      <Route path='/handbooks/imei' element={<HandbooksImei/>}/>
      <Route path='/handbooks/ispc' element={<HandbooksIspc/>}/>
      <Route path='/handbooks/ip' element={<HandbooksIp/>}/>
      <Route path='/handbooks/orientir' element={<HandbooksOrientir/>}/>
      <Route path='/handbooks/station' element={<HandbooksStation/>}/>
      <Route path='/handbooks/calendar' element={<HandbooksCalendar/>}/>

      <Route path='/handbook/import' element={<HandbookImport/>}/>
      <Route path='/handbook/settings' element={<HandbookSettings/>}/>
      <Route path='/catalog' element={<Catalog/>}/>

      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/adminpanel/logs' element={<LogsAdmin/>}/>
      <Route path='/adminpanel/adduser' element={<AddUser/>}/>
      <Route path='/adminpanel/edituser/:userName' element={<EditUser/>}/>
      <Route path='/adminpanel/reports' element={<AdminReport/>}/>
    </Routes>
  );
}

export default App;
