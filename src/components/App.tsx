import React, { useState } from 'react';
import '../App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Todo } from '../TypeDefinition/Todo';

const App: React.FC = () => {

  const [todos, setTodos] = useState([] as any);
  const [pendingTodo, setPendingTodo] = useState(todos.length);

  const toggleComplete = (index: number): void => {
    setTodos(todos.map((todo: any, key: number) => (index === key) ? { ...todo,complete: !todo.complete } : todo ));
    setPendingTodo(todos[index].complete ? pendingTodo + 1 : pendingTodo - 1); 
  }

  const handleRemoveTodo = (removeIndex: number): void => {
    setTodos(todos.filter((item: Todo.ITodo, key: number) => key !== removeIndex));
    setPendingTodo(todos[removeIndex].complete ? pendingTodo : pendingTodo - 1);
   };

  const handleAddTodo = (text: string): void => {
    setTodos([{ text, complete: false }, ...todos]); 
    setPendingTodo(pendingTodo+1)
  }

  return (
    <div>
        <div className="container">
          <AddTodo addTodo={(text: any) => handleAddTodo(text) }/>
          <TodoList todos={todos} 
                    pendingTodo={pendingTodo}
                    toggleComplete={(index: number) => toggleComplete(index)} 
                    deleteTodo={(index: number) => handleRemoveTodo(index)}
          />
        </div>
    </div>
  );
}

export default App;
