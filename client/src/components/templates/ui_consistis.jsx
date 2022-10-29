import React, { Component } from "react";
import styled from "styled-components";

const MypageStyle = styled.div`
position: fixed;
display: flex;
justify-content: center;
margin: 0 auto;

width: 100%;
height: 100%;
left: 50%;
transform: translate(-50%);
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