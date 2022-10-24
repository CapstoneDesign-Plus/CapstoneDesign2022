import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./hoc/Header/Header";
import Mypage from "./components/MyPage/Mypage";
import ChangeNickname from "./components/MyPage/ChangeNickname";
import ChangePassword from "./components/MyPage/ChangePassword";
import BuyList from "./components/MyPage/BuyList/BuyList";
import Used from "./components/MyPage/BuyList/Used";
import UnUsed from "./components/MyPage/BuyList/UnUsed";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import theme from "./theme/theme.jsx";
import { ThemeProvider } from "@mui/material";

const AppStyle = styled.div `
  width: 390px;
`

function App() {

  console.log('new file');

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
      <BrowserRouter>
        {/* <Link to = "../components/MyPage/Mypage">MyPage</Link>
      <Link to = "../components/MyPage/ChangeNickname">ChangeNickname</Link>
      <Link to = "/changePassword">ChangePassword</Link> */}
        <Header />
        <Routes>
          <Route path="/" element={<Mypage />} />
          <Route path="/ChangeNickname" element={<ChangeNickname />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/BuyList" element={<BuyList />} />
          <Route path="/BuyList/UnUsed" element = {<UnUsed />} />
          <Route path="/BuyList/Used" element = {<Used />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Mypage /> */}
      {/* <ChangeNickname /> */}
      {/* <ChangePassword /> */}
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;