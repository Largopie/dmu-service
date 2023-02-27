import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from './config';


const Department = () => {
    const [email, setEmail] = useState('');
    const [emailDetail, setEmailDetail] = useState('');
    const [pw, setPw] = useState('');
    const [divId, setDivId] = useState(0);
    const [divisions, setDiv] = useState([]);
    const [departments, setDep] = useState([]);
    const [departmentId, setDepartmentId] = useState(0);

    const handleOnChange = (e) => {
        setDivId(Number(e.target.value));
    };

    const handleEmailDetail = (e) => {
        setEmailDetail(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value)
    };

    const handleDepId = (e) => {
        setDepartmentId(Number(e.target.value));
    };

    useEffect(() => {
        axios.post(`${API.DIVISION}`).then((res) => {
            setDiv(res.data);
        })
        axios.post(`${API.DEPARTMENT}`).then((res) => {
            setDep(res.data);
        })
    }, []);

    const handleOnClick = (e) => {
        e.preventDefault();
        axios.post(`${API.REGISTER}`,
        {
            email: `${email}@${emailDetail}`,
            memberPassword: pw,
            department: {
                id:departmentId,
            }
        }).then((res) => (console.log(res)));
    };

    console.log(departmentId);
    return (
        <form>
            이메일 : <input onChange={handleEmail} value={email} type="email" />@
            <select onChange={handleEmailDetail}>
                <option value="dongyang.ac.kr">dongyang.ac.kr</option>
                <option value="m365.dongyang.ac.kr">m365.dongyang.ac.kr</option>
            </select>
            <br/>
            비밀번호 : <input onChange={handlePw} value={pw} type="password" />
            <select onChange={handleOnChange}>
                <option>학부를 선택하세요</option>
                {divisions.map((division) => (<option key={division.id} value={division.id}>{division.name}</option>))}
            </select>
            <select onChange={handleDepId}>
                <option>학과를 선택하세요</option>
                {departments.filter((department) => department.divId === divId).map((val) => (<option key={val.name+divId} value={val.id} >{val.name}</option>))}
            </select>
            <input type="submit" onClick={handleOnClick} />
        </form>
    );
}

export default Department;