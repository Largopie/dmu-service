import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/LoginForm';

const LoginDiv = styled.div`
  max-height: 80%;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 488px;
`;

const LoginBtn = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  width: 250px;
  height: 60px;
  border-radius: 20px 0px 0px 0px;
  color : ${(props) => props.fontColor};
  font-size: 18px;
`;

const JoinBtn = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  width: 250px;
  height: 60px;
  border-radius: 0px 20px 0px 0px;
  color : ${(props) => props.fontColor};
  font-size: 18px;
`;

const ImgDiv = styled.div`
  width: 500px;
  height: 128px;
`;

const LoginInputDiv = styled.div`
  width: 500px;
  height: 260px;
  margin-bottom: 40px;
`;

const JoinInputDiv = styled.div`
  width: 500px;
  height: 260px;
  margin-bottom:40px;
`;

const Login = () => {
  const [loginBtnColor, setLoginBtnColor] = useState('white');
  const [joinBtnColor, setJoinBtnColor] = useState('gray');
  const [isLoginPage, setIsLoginPage] = useState(1);
  const [btnLoginFontColor, setBtnLoginFontColor] = useState('#2878FF');
  const [btnJoinFontColor, setBtnJoinFontColor] = useState('#252525');


  const changeLogin = () => {
    setLoginBtnColor('white');
    setJoinBtnColor('#888888');
    setBtnLoginFontColor('#2878FF');
    setBtnJoinFontColor('#252525');
    setIsLoginPage(1);
  };

  const changeJoin = () => {
    setJoinBtnColor('white');
    setLoginBtnColor('#888888');
    setBtnLoginFontColor('#252525');
    setBtnJoinFontColor('#2878FF');
    setIsLoginPage(0);
  };

  return (
    <LoginDiv onClick={(e) => e.stopPropagation()}>
      <LoginBtn fontColor={btnLoginFontColor} bgColor={loginBtnColor} onClick={changeLogin}>로그인</LoginBtn>
      <JoinBtn fontColor={btnJoinFontColor} bgColor={joinBtnColor} onClick={changeJoin}>회원가입</JoinBtn>
      <ImgDiv />
      {isLoginPage ? 
        <LoginInputDiv>
        <Form />
        </LoginInputDiv> :
        <JoinInputDiv>123</JoinInputDiv>
      }
    </LoginDiv>
  );
}

export default Login;
