import React, { useState } from 'react';
import axios from 'axios';
import ToDoListItem from './ToDoListItem';

const Test = () => {
  const [val, setVal] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([{
      value: {val},
    }, ...items])
    setVal('');
  };

  console.log(items);

  const handleSetValue = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <h1>TodoList 구현해보기</h1><br />
      <form>
        <input onChange={handleSetValue} value={val} type="text"/>
        <input onClick={handleSubmit} type="submit" value="등록"/>
      </form>
      <ul>
        {items.map((item, idx) => (
          <ToDoListItem key={idx} idx={idx} todo={item.value} />
        ))}
      </ul>
    </div>
  );
}

export default Test;
