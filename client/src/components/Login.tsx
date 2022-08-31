import React from "react";
import { Component, ReactNode } from "react";
import { Navigate } from 'react-router-dom';

export interface LoginProps {
  login(email: string, password: string) : Promise<boolean>
}

interface LoginState {
  email: string,
  password: string,
  success: boolean
}

export default class Login extends Component<LoginProps, LoginState> {

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      email: "",
      password: "",
      success: false
    };
  }

  setPassword(text: string) {
    this.setState({
      password: text
    })
  }

  setEmail(text: string) {
    this.setState({
      email: text
    });
  }

  async login() {
    const success = await this.props.login(
      this.state.email,
      this.state.password
    );

    this.setState({
      success
    });
  }

  render(): ReactNode {

    if(this.state.success) return <Navigate to="/"/>

    return <div>
      <p>Email: <input type='email' onChange={({target: {value}})=>{ this.setEmail(value) }}/></p>
      <p>Password: <input type='password' onChange={({target: {value}})=> { this.setPassword(value)}}/></p>
      <button onClick={()=>{this.login()}}>Login!</button>
    </div>
  }
}