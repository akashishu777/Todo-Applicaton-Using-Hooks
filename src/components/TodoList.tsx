import React from 'react';
import '../App.css';
import { MemoizedTodoHeader } from './TodoHeader';
import { Todo } from '../TypeDefinition/Todo';


const TodoList: React.FC<Todo.ITodoListProps> = (props) => {

  let header = props.todos.length === 0 ? (
      <h4>All todos are done! Take a rest!</h4>
    ) : (
        <MemoizedTodoHeader pendingTodo = {props.pendingTodo} />
    );

  const getTodoList = props.todos.map((todo: Todo.ITodo, index: number) => (
      <div key={index} >
            <li onClick={() => props.toggleComplete(index)} 
                style={{ fontSize: '30px', display: 'inline', textDecoration: todo.complete ? 'line-through': ''}}>
                    {todo.text}
            </li>
            <button
                id={'btn-' + index}
                className="float-right btn btn-danger btn-sm"
                style={{ marginLeft: 10 }}
                onClick={() => props.deleteTodo(index)}
            >
            Delete
            </button>
        </div>
      ));
    
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {getTodoList}
            </ul>
          </div>
        </div>
    </div>
  </div>
  );
}

export default TodoList;