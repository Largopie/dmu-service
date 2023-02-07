import React, { useState } from 'react';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const LoginInputDiv = styled.div`
    width: 360px;
    height: 48px;
    margin: 0px 69px 8px 69px;
    border: solid 1px ${(props) => props.bColor};
    border-radius: 5px;
    padding-left: 16px;
    display: flex;
`;

const PWInputDiv = styled.div`
    width: 360px;
    height: 48px;
    margin: 0px 69px 8px 69px;
    border: solid 1px ${(props) => props.bColor};
    border-radius: 5px;
    padding-left: 16px;
    display: flex;
`;

const IconDiv = styled.div`
    width: 24px;
    height: 24px;
    margin-top: 12px;
    margin-bottom: 12px;
`;

const Input = styled.input`
    margin-left: 10px;
    :focus {
        outline: none;
    };
    width: 310px;
    height: 46px;
    border: none;
    ::placeholder { 
        color: #CCCCCC;
    };
`;
const Submit = styled.input`
    cursor: pointer;
    background-color: #2878FF;
    color: #FFFFFF;
    font-size: 18px;
    border-radius: 8px;
    border: none;
    width: 360px;
    height: 48px;
    margin-bottom: 8px;
`;

const EyeBtn = styled.button`
    position: absolute;
    background-color: white;
    border: none;
    width: 24px;
    height: 24px;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 300px;
`;

const Div = styled.div`
    width: 360px;
    height: 16px;
    margin: 0px 69px 0px 69px;
`;

const Div1 = styled.div`
    float: left;
    width: 100px;
    height: 16px;
`;

const Div2 = styled.div`
    float: right;
    width: 200px;
    height: 16px;
`;

const LoginForm = () => {
    const [showPW, setShowPW] = useState(1);
    const [idfocus, setIDFocus] = useState(0);
    const [pwfocus, setPWfocus] = useState(0);

    const handlePW = () => {
        setShowPW((state) => !state);
    };

    const handleIDFocus = () => {
        setIDFocus((prop) => !prop);
    };

    const handlePWFocus = () => {
        setPWfocus((prop) => !prop);
    };

    return (
        <form>
            <LoginInputDiv bColor={ idfocus ? '#2878FF' : '#CCCCCC' }>
                <IconDiv>
                    <FontAwesomeIcon color={idfocus ? '#2878FF' : '#888888'} icon={faEnvelope} />
                </IconDiv>
                    <Input onBlur={handleIDFocus} onFocus={handleIDFocus} placeholder="이메일" type="text" />
                </LoginInputDiv>
            <PWInputDiv bColor={ pwfocus ? '#2878FF' : '#CCCCCC' }>
                <IconDiv><FontAwesomeIcon color={pwfocus ? '#2878FF' : '#888888'} icon={faLock} /></IconDiv>
                <Input onBlur={handlePWFocus} onFocus={handlePWFocus} placeholder="비밀번호" type={showPW ? "password" : "text"} />
                <EyeBtn onClick={handlePW}><FontAwesomeIcon color={'#252525'} icon={ showPW ? faEyeSlash : faEye } /></EyeBtn>
            </PWInputDiv>
            <Submit type="submit" value="로그인" />
            <Div>
                <Div1>
                    <input id="autoLogin" type="checkbox" />
                    <label htmlFor="autoLogin">자동 로그인</label>
                </Div1>
                <Div2>
                    <a href="!#">아이디 찾기</a> |
                    <a href="!#"> 비밀번호 찾기</a>
                </Div2>
            </Div>
        </form>
    );
}

export default LoginForm;
