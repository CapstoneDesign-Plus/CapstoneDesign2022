import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const MainStyle = styled.div``;

function Main() {
  return (
    <MainStyle>
      <Link to="/MyPage">마이페이지</Link><br /><br />
      <Link to="/ChangeNickname">닉네임 변경</Link><br /><br />
      <Link to="/ChangePassword">비밀번호 변경</Link><br /><br />
      <Link to="/BuyList">구매 내역</Link><br /><br />
      <Link to="/BuyList/UnUsed">미사용 식권</Link><br /><br />
      <Link to="/BuyList/Used">사용 식권</Link><br /><br />
      <Link to="/SignUp">회원가입</Link><br /><br />
      <Link to="/SignIn">로그인</Link><br /><br />
      <Link to="/ResetPassword">비밀번호 재설정</Link><br /><br />
      <Link to="/Notice">공지사항</Link><br /><br />
      <Link to="/NoticeDetail">공지사항</Link><br /><br />
      <Link to="/Charge">잔여 재화</Link><br /><br />
      <Link to="/BuyTicket">식권 구매</Link><br /><br />
      <Link to="/MainPage">메인페이지</Link><br /><br />

    </MainStyle>
  );
}

export default Main;
