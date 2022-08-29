import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import NoticeBoard from './NoticeBoard';
import NoticeContent from './NoticeContent';
import TicketBoard from './TicketBoard';
import TicketContent from './TicketContent';
import UserBoard from './UserBoard';
import UserContent from './UserContent';

class App extends Component {
  state = {
    
  }

  render() {
    return(
      <div className='App'>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/noticeBoard' element={<NoticeBoard />}></Route>
              <Route path='/ticketBoard' element={<TicketBoard />}></Route>
              <Route path='/userBoard' element={<UserBoard />}></Route>
              <Route path='/notice/:noticeId' element={<NoticeContent />}></Route>
              <Route path='/user/:userId' element={<UserContent />}></Route>
              <Route path='/ticket/content' element={<TicketContent />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));