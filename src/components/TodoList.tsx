import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoContextType } from '../context/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

  return (
    <table className="uk-table">
      <caption>Tasks</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <TodoListItem key={todo.id} todo={todo}></TodoListItem>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
