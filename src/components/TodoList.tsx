import React from 'react';
import { Todo } from '../models/Todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: 'Ir ao Supermercado', done: false },
    { id: 2, title: 'Ir a igreja', done: true },
    { id: 3, title: 'Ir a academia', done: false },
    { id: 4, title: 'Ir ao cabeleleiro', done: true },
    { id: 5, title: 'Ir ao Supermercado', done: false },
    { id: 6, title: 'Ir ao Supermercado', done: false },
  ];
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
