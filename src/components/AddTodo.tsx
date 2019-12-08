import React, { useState } from 'react';
import '../App.css';
import { Todo } from '../TypeDefinition/Todo';

const useInputValue = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

const AddTodo: React.FC<Todo.IAddTodoProps> = (props) => {

  const { resetValue, ...text } = useInputValue('');

  const handleAddTodo = (value: any) => { 
    if (value !== '') {
      props.addTodo(value);
      resetValue();
    }
  }

  return (
        <div className="row">
        <div className="col-md-12">
          <br />
          <div className="input-group">
          <input {...text}
              className="form-control" 
              autoFocus
              placeholder="Enter new todo" 
          />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={() => handleAddTodo(text.value)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AddTodo;