import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./hoc/Header/Header";
import Mypage from "./components/MyPage/Mypage";
import ChangeNickname from "./components/User/ChangeNickname";
import ChangePassword from "./components/User/ChangePassword/ChangePassword";
import ResetPassword from "./components/User/ResetPassword";
import BuyList from "./components/MyPage/BuyList/BuyList";
import Used from "./components/MyPage/BuyList/Used";
import UnUsed from "./components/MyPage/BuyList/UnUsed";
import SignIn from "./components/User/SignIn/SignIn";
import SignUp from "./components/User/SignUp";
import MainPage from "./components/Main/MainPage";
import AdminPage from "./pages/AdminPage";
import theme from "./theme/theme.jsx";

import NoticePage from "../src/pages/notice_page";
import ChargePage from "../src/pages/charge_page";
import BuyTicketPage from "../src/pages/buyticket_page";
import { ThemeProvider } from "@mui/material";
import Error from "./components/ErrorPage/Error";
import RequestEmail from "./components/User/RequestEmail/RequestEmail";
import TokenInvalid from "./components/User/TokenInvalid";

import { useRecoilState, useRecoilValue } from "recoil";
import authState from "./state/auth";
import axios from "./lib/axios";
import NoticeWriter from "./components/Admin/Notice/NoticeWriter";
import Auth from "./components/Auth";
import adminState from "./state/admin";
import Logout from "./components/User/Logout";

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
  const adminMode = useRecoilValue(adminState);

  useEffect(() => {
    check().then((value) => {
      if (value.data.ok) {
        setAuth(value.data.result);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer adminMode={adminMode}>
        <BrowserRouter>
          {!adminMode ? <Header /> : <></>}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Notice" element={<NoticePage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/ResetPassword/:token" element={<ResetPassword />} />
            <Route path="/RequestEmail" element={<RequestEmail />} />
            <Route path="/TokenInvalid" element={<TokenInvalid />} />
            <Route path="/notice/write" element={<NoticeWriter />} />
            <Route path="/Mypage" element={<Auth el={<Mypage />} />} />
            <Route
              path="/admin/*"
              element={<Auth el={<AdminPage />} admin />}
              // element={<AdminPage />}
            />
            <Route
              path="/ChangeNickname"
              element={<Auth el={<ChangeNickname />} />}
            />
            <Route
              path="/ChangePassword"
              element={<Auth el={<ChangePassword />} />}
            />
            <Route path="/BuyList" element={<Auth el={<BuyList />} />} />
            <Route path="/BuyList/UnUsed" element={<Auth el={<UnUsed />} />} />
            <Route path="/BuyList/Used" element={<Auth el={<Used />} />} />
            <Route path="/Charge" element={<Auth el={<ChargePage />} />} />
            <Route
              path="/BuyTicket"
              element={<Auth el={<BuyTicketPage />} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
