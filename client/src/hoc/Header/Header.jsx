import styled from "styled-components";
import React from "react";

const HeaderStyle = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #b1d6a8;
  width: 475px;
  height: 90px;

  .title {
    padding: 10px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 40px;
    color: #509c90;
  }
  .logo {
    width: 273px;
    height: 75px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="title">
        <img
          className="logo"
          alt="logo"
          src="\images\logo.png"
        />
      </div>
    </HeaderStyle>
  );
}

export default Header;
