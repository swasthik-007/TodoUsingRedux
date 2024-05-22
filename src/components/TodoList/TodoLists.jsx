import { useSelector } from 'react-redux';
import Todos from '../Todo/Todos';
import TodoInput from '../TodoInput/TodoInput';
function TodoList() {
    const todoList = useSelector((state) => state.todos);
    return (
        <>
            <TodoInput />
            {todoList && todoList.map((todo) => <Todos id={todo.id} title={todo.title} key={todo.id} />)}
        </>
    )
}
export default TodoList;