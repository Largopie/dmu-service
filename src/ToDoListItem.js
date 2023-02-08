import React from 'react';

const ToDoListItem = ({todo,idx}) => {
    console.log(todo);
    return (
        <li id={idx}>
            {todo}
        </li>
    );
}

export default ToDoListItem;