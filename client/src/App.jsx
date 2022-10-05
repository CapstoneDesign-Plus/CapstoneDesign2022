import React from 'react';
import Header from './hoc/Header/Header';
import Mypage from './components/MyPage/Mypage';
import ChangeNickname from './components/MyPage/ChangeNickname';
import ChangePassword from './components/MyPage/ChangePassword';
import theme from './theme/theme.jsx';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Mypage />
      {/* <ChangeNickname /> */}
      {/* <ChangePassword /> */}
    </ThemeProvider>
  );
}

export default App;
