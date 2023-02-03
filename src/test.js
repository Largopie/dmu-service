import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [testObj, setObj] = useState({});
  const [join, setJoin] = useState({
    grade: '',
    name: '',
    password: '',
    studentId: '',
    phone: '',
    email: '',
    department: '',
    division: '',
  });

  const handleOnChangeState = (e) => {
    e.preventDefault();
    setJoin({
      ...join,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    axios.post('http://192.168.0.57:8080/meal').then((res) => {
      console.log(res);
      setObj(res.data);
    });
  };

  return (
    <div>
      <form>
        Grade :
        <input type="text" name="grade" value={join.grade} onChange={handleOnChangeState} />
        <br />
        Name :
        <input type="text" name="name" value={join.name} onChange={handleOnChangeState} />
        <br />
        Password :
        <input type="text" name="password" value={join.password} onChange={handleOnChangeState} />
        <br />
        Student ID :
        <input type="text" name="studentId" value={join.studentId} onChange={handleOnChangeState} />
        <br />
        Phone :
        <input type="text" name="phone" value={join.phone} onChange={handleOnChangeState} />
        <br />
        Email :
        <input type="text" name="email" value={join.email} onChange={handleOnChangeState} />
        <br />
        Department :
        <input type="text" name="department" value={join.department} onChange={handleOnChangeState} />
        <br />
        Division :
        <input type="text" name="division" value={join.division} onChange={handleOnChangeState} />
        <br />
        <input type="button" value="올리기" onClick={handleOnClick} />
      </form>
      { JSON.stringify(testObj[1]) }

    </div>
  );
}

export default Test;
