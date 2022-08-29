import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import NoticeBoard from './NoticeBoard';
import NoticeContent from './NoticeContent';

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
              <Route path='/notice/:noticeId' element={<NoticeContent />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));