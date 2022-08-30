import { UserDTO } from '@/types/dto';
import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Footer from './Footer';
import Header from './Header';
import RouteBundle from './RouteBundle';

export interface AppState {
  authenticated: boolean,
}

class App extends Component<any, AppState> {
  state = {
    authenticated: false,
  }

  login = async (email: string, password: string)=> {

    const res = await axios.post('/api/v1/user/auth/login', {
      email,
      password
    });

    if(res.status != 200) return false;

    this.setState({
      authenticated: true
    });

    return true;
  }

  render() {
    return(
      <div className='App'>
        <Router>
          <Header/>
            <RouteBundle appState={this.state} loginProps={{ login: this.login}} />
          <Footer/>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));