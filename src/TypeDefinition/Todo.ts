export namespace Todo {

    export interface ITodo {
        text: string;
        complete: boolean;
    }

    export interface ITodoListProps {
         todos: ITodo[];
         pendingTodo: number;
         toggleComplete: (index: number) => void;
         deleteTodo: (index: number) => void;
    }
    
    export interface IAddTodoProps {
        addTodo: (text: string) => void;
    }
}
