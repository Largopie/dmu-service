import React from 'react';
import styled from 'styled-components';

const InputDiv = styled.div`
    width: 360px;
    height: 48px;
    margin: 0px 69px 8px 69px;
    border: solid 1px lightgray;
    border-radius: 5px;
`;

const Input = styled.input`
    width: 200px;
    height: 46px;
    border: none;
`;
const Submit = styled.input`
    width: 360px;
    height: 48px;
`;

const LoginForm = () => {
    return (
        <form>
            <InputDiv><Input type="text" /></InputDiv>
            <InputDiv><Input type="password" /></InputDiv>
            <Submit type="submit" />
            <input id="autoLogin" type="checkbox" />
            자동 로그인
        </form>
    );
}

export default LoginForm;
