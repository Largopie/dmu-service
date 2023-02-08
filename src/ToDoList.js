import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todolist }) => {
    console.log(todolist);
    return (
        <ul>
            {todolist.map((todo, idx) => (
                <ToDoListItem key={idx} todo={todo} idx={idx} />
            ))}
        </ul>
    );
}

export default ToDoList;