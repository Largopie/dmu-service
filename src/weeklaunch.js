import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from './config';

const Div = styled.div`
    width: 600px;
    height: 195px;
    margin-bottom: 40px;
`;

const TextDiv = styled.div`
    width: 132px;
    height: 32px;
    margin-bottom: 10px;
`;

const TitleSpan = styled.span`
    font-weight: 700;
    font-size: 22px;
`;

const WeekLaunchChart = styled.div`
    width: 600px;
    height: 154px;
    display: flex;
    text-align: center;
`;

const DayDiv = styled.div`
    width: 120px;
    height: 154px;
`;

const Day = styled.div`
    color: ${(props) => props.fontColor};
    border: solid 1px ${(props) => props.borderColor};
    width: 120px;
    height: 26px;
    line-height: 26px;
`;

const Menu = styled.div`
    color: ${(props) => props.fontColor};
    border-right: solid 1px ${(props) => props.borderColor};
    border-left: solid 1px ${(props) => props.borderColor};
    border-bottom: solid 1px ${(props) => props.borderColor};
    width: 120px;
    height: 128px;
    margin-top: 0px;
    overflow: hidden;
`;

const TestDiv = styled.div`
    height: 112px;
    padding-top: 16px;
`;

// const TestDiv = styled.div`
//     margin-top: 50%;
//     transform: translate(0, -50%);
// `;

//8글자이상이면 6글자까지만 나오고 + ...

const WeekLaunchMenu = () => {
    const [day, setDay] = useState(0);
    const [loading, setLoading] = useState(false);
    const [menus, setMenus] = useState([]);
    const days = ['월', '화', '수', '목', '금'];

    useEffect(() => {
        // axios.post(`${API.LAUNCH}`).then((res) => {
        //     setMenus(res.data[1]);
        // });
        setMenus(['밥 김치 안드로메다멸치볶음','밥 김치 라면','밥 김치 라면','밥 김치 라면','밥 김치 라면']);
        setDay(new Date().getDay());
        setLoading(true);
    }, []);
    return (
        <>
        {loading ?
            <Div>
            <TextDiv><TitleSpan>이번 주 식단표</TitleSpan></TextDiv>
            <WeekLaunchChart>
                    {days.map((val, idx) => (
                        <DayDiv key={idx}>
                            <Day id={idx} fontColor={ idx+1===day ? '#2878FF' : '#888888' } borderColor={ idx+1===day ? '#2878FF' : '#CCCCCC' }>{val}</Day>
                            <Menu fontColor={ idx+1===day ? '#2878FF' : '#252525' } borderColor={ idx+1===day ? '#2878FF' : '#CCCCCC' }><TestDiv>{menus[idx].split(' ').map((val) => <p key={val}>{val.length >= 8 ? val.substring(0,6)+'...' : val}</p>)}</TestDiv></Menu>
                        </DayDiv>
                    ))}
            </WeekLaunchChart>
            </Div>
        : <h1>loading...</h1> }
        </>
    );
}

export default WeekLaunchMenu;
