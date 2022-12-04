import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./hoc/Header/Header";
import ChangeNickname from "./components/User/ChangeNickname";
import ChangePassword from "./components/User/ChangePassword/ChangePassword";
import ResetPassword from "./components/User/ResetPassword";
import BuyList from "./components/MyPage/BuyList/BuyList";
import Used from "./components/MyPage/BuyList/Used";
import UnUsed from "./components/MyPage/BuyList/UnUsed";
import SignIn from "./components/User/SignIn/SignIn";
import SignUp from "./components/User/SignUp/SignUp";
import QRcode from "./components/QRcode";

import theme from "./theme/theme.jsx";

import NoticePage from "../src/pages/notice_page";
import NoticeDetailPage from "../src/pages/noticeDetail_page";

import ChargePage from "../src/pages/charge_page";
import BuyTicketPage from "../src/pages/buyticket_page";
import { CircularProgress, ThemeProvider } from "@mui/material";
import Error from "./components/ErrorPage/Error";
import RequestEmail from "./components/User/RequestEmail/RequestEmail";
import TokenInvalid from "./components/User/TokenInvalid";

import authState from "./state/auth";
import axios from "./lib/axios";
import NoticeWriter from "./components/Admin/Notice/NoticeWriter";
import Auth from "./components/Auth";
import adminState from "./state/admin";
import Logout from "./components/User/Logout";
import MainPage from "./components/Main/MainPage";
import Mypage from "./components/MyPage/Mypage";
import Transfer from "./components/Transfer";

const AdminPage = React.lazy(() => import("./pages/AdminPage"));

import { useRecoilState, useRecoilValue } from "recoil";
import QRRead from "./components/QRread";

//
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
      <Suspense fallback={<CircularProgress />}>
        <AppContainer adminMode={adminMode}>
          <BrowserRouter>
            {!adminMode ? <Header /> : <></>}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />

              <Route path="/Notice" element={<NoticePage />} />
              <Route path="/NoticeDetail/:id" element={<NoticeDetailPage />} />

              <Route path="/logout" element={<Logout />} />
              <Route path="/ResetPassword/:token" element={<ResetPassword />} />
              <Route path="/RequestEmail" element={<RequestEmail />} />
              <Route path="/TokenInvalid" element={<TokenInvalid />} />
              <Route path="/notice/write" element={<NoticeWriter />} />
              <Route path="/Transfer/:id" element={<Transfer />} />
              <Route path="/qrread" element={<QRRead />} />
              <Route path="/qrcode" element={<Auth el={<QRcode />} />} />
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
                // element={<ChangePassword />}
              />
              <Route path="/BuyList" element={<Auth el={<BuyList />} />} />
              <Route path="/UnUsed" element={<Auth el={<UnUsed />} />} />
              <Route path="/Used" element={<Auth el={<Used />} />} />
              <Route path="/Charge" element={<Auth el={<ChargePage />} />} />
              <Route
                path="/BuyTicket"
                element={<Auth el={<BuyTicketPage />} />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </AppContainer>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
