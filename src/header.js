import React, { useState } from 'react';
import styled from 'styled-components';
import Menubar from './menubar';
import Login from './login';

const StyledDiv = styled.div`
  box-shadow: 0 0 0 1px #000 inset;
  height: 36px;
  width: ${(props) => props.handleWidth};
  float: ${(props) => props.handleFloat};
  span {
    box-shadow: 0 0 0 1px red inset;
    line-height: 36px;
  }
`;

const HeaderDiv = styled.div`
  width: 1280px;
  height: 100px;
`;

const LoginBtn = styled.a`
  box-shadow: 0 0 0 1px red inset;
  font-size: 14px;
  width: 49px;
  height: 20px;
  line-height: 36px;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
    animation: fadein 0.3s;
    @keyframes fadein{
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`;

function Header() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <HeaderDiv>
        <StyledDiv handleWidth="1280px">
          <StyledDiv handleWidth="300px" handleFloat="left">
            <span>날씨 API 넣을거임</span>
          </StyledDiv>

          <StyledDiv handleWidth="100px" handleFloat="right">
            <LoginBtn href="#!" onClick={modalHandler}>
              로그인
            </LoginBtn>
          </StyledDiv>
        </StyledDiv>
        <Menubar />
      </HeaderDiv>
      {modal ? 
        <Background onClick={() => { closeModal(); }}>
          <Login />
        </Background>
       : null }

    </>
  );
}

export default Header;
