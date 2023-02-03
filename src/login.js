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
`;

const JoinBtn = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  width: 250px;
  height: 60px;
  border-radius: 0px 20px 0px 0px;
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

const Login = () => {
  const [loginBtnColor, setLoginBtnColor] = useState('white');
  const [joinBtnColor, setJoinBtnColor] = useState('gray');

  const changeLogin = () => {
    setLoginBtnColor('white');
    setJoinBtnColor('gray');
  };

  const changeJoin = () => {
    setJoinBtnColor('white');
    setLoginBtnColor('gray');
  };

  return (
    <LoginDiv onClick={(e) => e.stopPropagation()}>
      <LoginBtn bgColor={loginBtnColor} onClick={changeLogin}>로그인</LoginBtn>
      <JoinBtn bgColor={joinBtnColor} onClick={changeJoin}>회원가입</JoinBtn>
      <ImgDiv />
      <LoginInputDiv>
        <Form />
      </LoginInputDiv>
    </LoginDiv>
  );
}

export default Login;
