import axios from 'axios';
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppState } from './components/dto';


import Footer from './components/Footer';
import Header from './components/Header';
import RouteBundle from './components/RouteBundle';

class App extends Component<any, AppState> {

  state = {
    authenticated: false  
  }

  async componentDidMount(){
    const res = await axios.get('/api/v1/user/auth/check');

    this.setState({authenticated : res.status === 200});
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

  logout = async () => {
    if(this.state.authenticated){
      await axios.post('/api/v1/user/auth/logout');
      this.setState({authenticated:false});
    }
  }

  render() {
    return(
      <div className='App'>
        <Router>
          <Header/>
            <RouteBundle appState={this.state} login={ this.login } logout={ this.logout }/>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;