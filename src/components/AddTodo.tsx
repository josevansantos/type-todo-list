import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TodoContextType } from '../context/TodoContextType';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  title: yup.string().required('Invalid task, please enter a task'),
});

interface AddTodoForm {
  title: string;
}

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTodoForm, e: any) => {
    addTodo(data.title);
    e.target.reset();
    window.location.href = '/type-todo-list/';
  };

  return (
    <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
      <h4>New task</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="write your new task here..."
          className="uk-input"
          ref={register}
        />
        <span>
          <small>
            <strong className="uk-text-danger">{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className="uk-button-group">
        <div>
          <button
            type="submit"
            className="uk-button uk-button-primary uk-align-left"
          >
            Save
          </button>
          <Link to={'/type-todo-list/'}>
            <span className="uk-button uk-button-danger uk-align-right">
              Cancel
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
