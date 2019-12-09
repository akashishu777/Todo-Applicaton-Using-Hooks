import React from "react";

const pluralize = (count: number) => count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

const TodoHeader = (props: any) => (
    <div className="row">
    <div className="col-md-8">
      <h5>Pending Items</h5>
    </div>
    <div className="col-md-4">
      <span className="float-right">{pluralize(props.pendingTodo)}</span>
    </div>
  </div>
);

// create a version that only renders on prop changes
export const MemoizedTodoHeader = React.memo(TodoHeader);