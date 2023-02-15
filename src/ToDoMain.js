import React, { useState, useRef } from 'react';
// import axios from 'axios';
import ToDoList from './ToDoList';

const ToDoMain = () => {
    const [val, setVal] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const nextId = useRef(0);

    const deleteItem = (id) => {
        setToDoList(toDoList.filter((todo) => todo.id !== id))
    };

    const handleOnChange = (e) => {
        setVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoList([{
            id: nextId.current,
            value: val,
        }, ...toDoList]);
        nextId.current += 1;
        setVal('');
    };
    return (
        <div>
            <h1>TodoList 구현해보기</h1><br />
            <form>
                <input onChange={handleOnChange} value={val} type="text" placeholder='Enter what to do' />
                <input onClick={handleSubmit} type="submit" value="Add" />
            </form>
            <ToDoList todolist={toDoList} />
        </div>
    );
}

export default ToDoMain;
