import React from 'react';

const ToDoListItem = ({idx,todo}) => {
    return (
        <li id={idx}>
            {todo}
        </li>
    );
}

export default ToDoListItem;