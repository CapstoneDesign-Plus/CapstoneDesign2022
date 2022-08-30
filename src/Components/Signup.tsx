import axios from "axios";
import React, { Component } from "react";
import { Navigate } from 'react-router-dom'

interface SignupState {
  email: string,
  password: string,
  test_password: string,
  username: string,
  success: boolean,
  information: string,
}

export default class Signup extends Component<any, SignupState> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
      test_password: '',
      username: '',
      information: '',
      success: false
    }
  }

  setEmail(text: string) {
    this.setState({
      email:text
    });

    if(!text.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
    )){
      this.setState({
        information: 'invalid email'
      });
    }else{
      this.setState({
        information: ''
      });
    }
  }

  setPassword(text: string) {
    this.setState({
      password:text
    });
  }

  setTestPassword(text: string) {
    this.setState({
      test_password:text
    });

    if(text === this.state.password) {
      this.setState({
        information: ''
      });
    }else{
      console.log(`${text} ${this.state.password}`)
      this.setState({
        information: 'test-password is different.'
      });
    }
  }

  setUsername(text: string) {
    this.setState({
      username:text
    });
  }

  async onClickSignup() {
    const res = await axios.post('/api/v1/user/auth/signup', {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    });

    if(res.status == 200) {
      this.setState({
        success: true
      });
    }
  }


  render(): React.ReactNode {
    if(this.state.success) return <Navigate to='/login'></Navigate>

    return <div>
      <p>username - <input type='text' onChange={({target: {value}})=>{this.setUsername(value)}} /></p>
      <p>email - <input type='email' onChange={({target: {value}})=>{this.setEmail(value)}} /></p>
      <p>ps - <input type='password'onChange={({target: {value}})=>{this.setPassword(value)}} /></p>
      <p>Test ps - <input type='password'onChange={({target: {value}})=>{this.setTestPassword(value)}} /></p>
      <p>{ this.state.information }</p>
      <p><button onClick={()=>{this.onClickSignup()}}>Sign up!</button></p>
    </div>
  }
}