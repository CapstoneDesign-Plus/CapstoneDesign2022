import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideMenuBar extends Component {
    render() {
        return (
            <div>
               
                  
                <Link to="/">
                     <p>홈</p>
                </Link>
                <Link to="/Notice">
                     <p>공지사항</p>
                </Link>
                <Link to="/Charge">
                     <p>재화충전</p>
                </Link>
                <Link to="/BuyTicket">
                     <p>티켓구매</p>
                </Link>
                   
            </div>
        );
    }
}

export default SideMenuBar;