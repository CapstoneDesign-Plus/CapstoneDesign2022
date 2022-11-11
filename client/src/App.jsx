import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./hoc/Header/Header";
import Mypage from "./components/MyPage/Mypage";
import ChangeNickname from "./components/MyPage/ChangeNickname";
import ChangePassword from "./components/MyPage/ChangePassword";
import ResetPassword from "./components/User/ResetPassword";
import BuyList from "./components/MyPage/BuyList/BuyList";
import Used from "./components/MyPage/BuyList/Used";
import UnUsed from "./components/MyPage/BuyList/UnUsed";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/SignUp";
import MainPage from "./components/Main/MainPage";
import theme from "./theme/theme.jsx";

import NoticePage from "../src/pages/notice_page";
import ChargePage from "../src/pages/charge_page";
import BuyTicketPage from "../src/pages/buyticket_page";
import { ThemeProvider } from "@mui/material";
import Error from "./components/ErrorPage/Error";
import RequestEmail from "./components/User/RequestEmail";
import TokenInvalid from "./components/User/TokenInvalid";


const AppStyle = styled.div`
  width: 390px;
`;

function App() {
  console.log("new file");

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <BrowserRouter>
          {/* <Link to = "../components/MyPage/Mypage">MyPage</Link>
      <Link to = "../components/MyPage/ChangeNickname">ChangeNickname</Link>
      <Link to = "/changePassword">ChangePassword</Link> */}
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/ChangeNickname" element={<ChangeNickname />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/ResetPassword/:token" element={<ResetPassword />} />
            <Route path="/BuyList" element={<BuyList />} />
            <Route path="/BuyList/UnUsed" element={<UnUsed />} />
            <Route path="/BuyList/Used" element={<Used />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Notice" element={<NoticePage />} />
            <Route path="/Charge" element={<ChargePage />} />
            <Route path="/BuyTicket" element={<BuyTicketPage />} />
            <Route path="/404" element={<Error />} />
            <Route path="/RequestEmail" element={<RequestEmail />} />
            <Route path="/TokenInvalid" element={<TokenInvalid />} />
          </Routes>
        </BrowserRouter>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
