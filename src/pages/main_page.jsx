import React, { Component } from "react";
import styled from "styled-components";

import Main from "../components/Main";
import SideMenuBar from "../templates/side_menu";
import Template from "../templates/ui_consistis";




class MainPage extends Component {
    render() {
        return (
            <>
              <Template>
               
                <SideMenuBar/>
                <Main/>
                
              </Template>  
            </>
        );
    }
}

export default MainPage;