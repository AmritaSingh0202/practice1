
import './App.css';
import React from 'react';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import Button from './components/Button';
import './style.css';
import Counter from './components/counter';

const App=()=>{
    return (
      <div className ="todo-container">
        <Counter/>
      <Header head="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Repeat"/>
      <Button/>
      </div>
    )
};

export default App;
