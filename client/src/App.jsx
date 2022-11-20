import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./hoc/Header/Header";
import Mypage from "./components/MyPage/Mypage";
import ChangeNickname from "./components/User/ChangeNickname";
import ChangePassword from "./components/User/ChangePassword";
import ResetPassword from "./components/User/ResetPassword";
import BuyList from "./components/MyPage/BuyList/BuyList";
import Used from "./components/MyPage/BuyList/Used";
import UnUsed from "./components/MyPage/BuyList/UnUsed";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/SignUp";
import MainPage from "./components/Main/MainPage";
import AdminPage from "./pages/AdminPage";
import theme from "./theme/theme.jsx";

import NoticePage from "../src/pages/notice_page";
import ChargePage from "../src/pages/charge_page";
import BuyTicketPage from "../src/pages/buyticket_page";
import { ThemeProvider } from "@mui/material";
import Error from "./components/ErrorPage/Error";
import RequestEmail from "./components/User/RequestEmail";
import TokenInvalid from "./components/User/TokenInvalid";

import { useRecoilState } from "recoil";
import authState from "./state/auth";
import axios from "./lib/axios";

const AppContainer = ({ adminMode, children }) => {
  return (
    <div
      style={{
        width: !adminMode ? "390px" : "100%",
      }}
    >
      {children}
    </div>
  );
};

async function check() {
  const response = await axios.get("v1/user/auth/check");
  return response;
}

function App() {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    check().then((value) => {
      if (value.data.ok) {
        setAuth(value.data.result);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer adminMode={auth && auth.admin}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/admin" element={<AdminPage />} />
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
            <Route path="/RequestEmail" element={<RequestEmail />} />
            <Route path="/TokenInvalid" element={<TokenInvalid />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
