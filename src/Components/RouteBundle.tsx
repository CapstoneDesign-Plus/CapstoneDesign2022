
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login, { LoginProps } from './Login';
import Main from './Main';
import NotFound from './NotFound';
import NoticeBoard from './NoticeBoard';
import NoticeContent from './NoticeContent';
import TicketBoard from './TicketBoard';
import TicketContent from './TicketContent';
import UserBoard from './UserBoard';
import UserContent from './UserContent';

import { AppState } from './App';
import Profile from './Profile';
import Signup from './Signup';
import NoticeEditor from './NoticeEditor';

interface RouteBundleProps {
  appState: AppState
  loginProps: LoginProps
}

const RouteBundle : React.FC<RouteBundleProps> = (props)=> {
  return <Routes>
  <Route path='/' element={<Main />}></Route>
  <Route path='/login' element= {<Login login={props.loginProps.login} />}></Route>
  <Route path='/noticeBoard' element={<NoticeBoard />}></Route>
  <Route path='/ticketBoard' element={<TicketBoard />}></Route>
  <Route path='/userBoard' element={<UserBoard />}></Route>
  <Route path='/profile' element={ <Profile authenticated={props.appState.authenticated} /> }></Route>
  <Route path='/signup' element={ <Signup /> }></Route>
  <Route path='/notice/edit/:noticeId' element={ <NoticeEditor authenticated={props.appState.authenticated} /> }></Route>
  <Route path='/notice/:noticeId' element={<NoticeContent />}></Route>
  <Route path='/user/:userId' element={<UserContent />}></Route>
  <Route path='/ticket/content' element={<TicketContent />}></Route>
  <Route path='*' element={<NotFound />}></Route>
</Routes>
}

export default RouteBundle;