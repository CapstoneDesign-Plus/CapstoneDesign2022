import React, { Component } from "react";
import styled from "styled-components";
import Header from"./header";


const MypageStyle = styled.div`
position: fixed;
top: 90px;
display: flex;
justify-content: center;
margin: 0 auto;

width: 475px;
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
          <>
           <div >
            <Header/>
            <MypageStyle>
           
             <div >
                
            {this.props.children}
            </div>
            </MypageStyle>
           
            </div>
          </>
           
           
          
        )
    }
}


export default Template;