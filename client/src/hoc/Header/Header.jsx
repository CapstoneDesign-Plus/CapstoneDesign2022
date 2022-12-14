import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #b1d6a8;
  z-index: 999;

  .logo {
    height: 75px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div style={{ padding: 10 }}>
        <Link to="/">
          <img className="logo" alt="logo" src="\images\logo.png" />
        </Link>
      </div>
    </HeaderStyle>
  );
}

export default Header;
