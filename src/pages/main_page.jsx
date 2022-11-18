import React, { Component } from "react";
import styled from "styled-components";

import SideMenuBar from "../components/templates/side_menu";
import Template from "../components/templates/ui_consistis";




class MainPage extends Component {
    render() {
        return (
            <>
              <Template>
                <SideMenuBar/>         
              </Template>  
            </>
        );
    }
}

export default MainPage;