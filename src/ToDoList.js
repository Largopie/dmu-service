import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todolist }) => {
    console.log(todolist);
    const deleteList = (id) => {
        todolist.filter((todo)=> todo.id !== id);
    };
    return (
        <ul>
            {todolist.map((todo) => (
                <ToDoListItem key={todo.id} todo={todo} deleteItem={deleteList} />
            ))}
        </ul>
    );
}

export default ToDoList;