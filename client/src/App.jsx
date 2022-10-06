import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./hoc/Header/Header";
import Mypage from "./components/MyPage/Mypage";
import ChangeNickname from "./components/MyPage/ChangeNickname";
import ChangePassword from "./components/MyPage/ChangePassword";
import BuyList from "./components/MyPage/BuyList/BuyList";
import theme from "./theme/theme.jsx";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Mypage /> */}
      {/* <ChangeNickname /> */}
      {/* <ChangePassword /> */}
    </ThemeProvider>
  );
}

export default App;
