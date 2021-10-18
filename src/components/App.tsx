import React from 'react';
import TodoContext from '../context/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container uk-container-small uk-align-center">
        <Navbar></Navbar>
        <TodoList></TodoList>
      </div>
    </TodoContext>
  );
};

export default App;
