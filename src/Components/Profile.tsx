import { UserDTO } from "@/types/dto";
import axios from "axios";
import React, { Component } from "react";
import { Navigate } from 'react-router-dom';

interface ProfileProps {
  authenticated: boolean
}

export default class Profile extends Component<ProfileProps, UserDTO> {

  constructor(props: ProfileProps) {
    super(props);
  }

  async componentDidMount(){
    if(this.props.authenticated){
      const res = await axios.get('/api/v1/user/get/profile');

      if(res.status == 200) {
        this.setState(res.data);
      }
    }
  }

  render(): React.ReactNode {
    if(!this.props.authenticated) return <Navigate to="/login"/>

    if(!this.state) return <div>Loading...</div>
    
    const u = this.state;
    
    return <div>
      <p>{u.email}</p>
      <p>{u.username}</p>
      <p>{u.point}</p>
      <p>{u.uclass}</p>
      <p>{u.tickets}</p>
    </div>
  }
}