import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import uuid from "uuid"
//showing vs-code dlasd;lasd;l
function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <TodoInput />
            <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
