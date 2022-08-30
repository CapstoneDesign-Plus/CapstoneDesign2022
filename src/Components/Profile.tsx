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
      <p>Email - {u.email}</p>
      <p>UserName - {u.username}</p>
      <p>Point - {u.point}</p>
      <p>Class - {u.uclass}</p>
      <p>Ticket - {u.tickets}</p>
    </div>
  }
}