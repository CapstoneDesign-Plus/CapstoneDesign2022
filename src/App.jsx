import { Component, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'

import MainPage from "./pages/main_page";
import NoticePage from "./pages/notice_page";
import ChargePage from "./pages/charge_page";
import BuyTicketPage from "./pages/buyticket_page";
import styled from "styled-components";


function App() {

    return(
      <>
     
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/Notice" element={<NoticePage/>} />
            <Route path="/Charge" element={<ChargePage/>} />
            <Route path="/BuyTicket" element={<BuyTicketPage/>} />
        </Routes>
      </BrowserRouter>
      
      
      </>
    );
  
}

export default App
