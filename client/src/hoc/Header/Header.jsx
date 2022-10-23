import styled from "styled-components";
import React from "react";

const HeaderStyle = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #b1d6a8;
  height: 90px;

  .logo {
    height: 75px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div style={{padding:10}}>
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
