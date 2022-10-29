import React, { Component } from "react";
import styled from "styled-components";

const MypageStyle = styled.div`
margin: 0 auto;
margin-top: 20px;
font-weight: bold;
color: #000000;
`;

class Template extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MypageStyle>                   
              {this.props.children}
            </MypageStyle>
        )
    }
}

export default Template;