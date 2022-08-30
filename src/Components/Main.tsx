
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {

  render() {
    return (
      <div className="main">
        <ul>
          <Link to='/noticeBoard'><li>Go Notice Board</li></Link>
          <Link to='/ticketBoard'><li>Go Ticket Board</li></Link>
          <Link to='/userBoard'><li>Go User Board</li></Link>
          <Link to='/login'><li>Go Login</li></Link>
          <Link to='/profile'><li>Go Profile</li></Link>
          <Link to='/signup'><li>Go Signup</li></Link>
          <Link to='/notice/edit/new' state={{
            mode: 'update',
          }}><li>Go Editor</li></Link>
        </ul>
      </div>
    )
  }
}