import React, { useState } from 'react';
// import axios from 'axios';
import ToDoList from './ToDoList';

const Test = () => {
  const [val, setVal] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleOnChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoList([val, ...toDoList])
    setVal('');
  };
  return (
    <div>
      <h1>TodoList 구현해보기</h1><br />
      <form>
        <input onChange={handleOnChange} value={val} type="text" placeholder='Enter what to do' />
        <input onClick={handleSubmit} type="submit" value="Add" />
      </form>
      <ToDoList todolist={toDoList}/>
    </div>
  );
}

export default Test;
