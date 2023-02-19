import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from './config';
import styled from 'styled-components';
import Table from './Table';

const Div = styled.div`
  border: solid 1px blue;
`;

const Test = () => {
  const [value, setValue] = useState([]);

  const columns = ['noticeId', 'noticeTitle', 'noticeDate'];

  const data = [
    {
      id: 1,
      title: '타이틀1',
      date: '2022/01/01'
    },
    {
      id: 2,
      title: '타이틀2',
      date: '2022/01/02'
    },
    {
      id: 3,
      title: '타이틀3',
      date: '2022/01/03'
    },
    {
      id: 4,
      title: '타이틀4',
      date: '2022/01/04'
    },
  ];

  const arr = [1,2,3,4,5,6,7,8,9,10];
  
  useEffect(() => {
    axios.post(`${API.NOTICE}`, {
      less: 10,
      greater: 1,
    }).then((res) => {
      setValue(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      {/* <div dangerouslySetInnerHTML={ {__html: value.map((content) =>"<div style='border: 1px solid blue'>"+ content.noticeContent + "</div>")} }>
      </div> */}
      <Table columns={columns} data={value} />
    </div>
  );
}

export default Test;
