import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoContextType } from '../context/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };

  const handleOnChange = () => {
    toggle(props.todo);
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={props.todo.done}
            onChange={handleOnChange}
          ></input>
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-text-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}
        ></button>
      </td>
    </tr>
  );
};

export default TodoListItem;
