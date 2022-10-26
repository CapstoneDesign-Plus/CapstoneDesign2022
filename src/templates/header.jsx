import React, { Component } from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #b1d6a8;
  width: 475px;
  height: 90px;
  left: 50%;
  transform: translate(-50%);

  .title {
    padding: 10px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 40px;
    color: #509c90;
  }
  .logo-tiger {
    margin-top: 0px;
    width: 75px;
    height: 75px;
    vertical-align: baseline;
  }
  .logo-Bapsim {
    width: 273px;
    height: 75px;
  }
`;
class Header extends Component {
    render() {
        return (
            <HeaderStyle>
            <div className="title">
              <img
                className="logo-tiger"
                alt="logo-tiger"
                src="/images/logo-tiger.png"
              />
              <img
                className="logo-Bapsim"
                alt="logo-title"
                src="/images/logo-Bapsim.png"
              />
            </div>
          </HeaderStyle>
        );
    }
}

export default Header;