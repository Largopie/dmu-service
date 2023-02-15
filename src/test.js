import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from './config';
import styled from 'styled-components';

const Div = styled.div`
  border: solid 1px blue;
`;

const Test = () => {
  const [value, setValue] = useState([]);

  let codes = "<h1> hi </h1>";
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
    <div dangerouslySetInnerHTML={ {__html: value.map((content) =>"<div style='border: 1px solid blue'>"+ content.noticeContent + "</div>")} }>
      {/* {JSON.stringify(value.noticeContent)} */}
      {/* <ul>
        {value.map((content) => <li key={content.noticeNumber}>{content.noticeContent}</li>)}
      </ul> */}
      
    </div>
  );
}

export default Test;
