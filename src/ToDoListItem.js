import React from 'react';

const ToDoListItem = ({todo, deleteItem }) => {
    console.log(todo);

    return (
        <li id={todo.id}>
            {todo.value}
            <button>수정</button>
            <button onClick={() => deleteItem(todo.id)}>삭제</button>
        </li>
    );
}

export default ToDoListItem;