import React from 'react';
import TodoListContainer from './todos/todo_list_container';
const App = (props) => {
  return(
    <div>
      <h1>🐄 This is a Todo App 🐄 </h1>
      <TodoListContainer />
    </div>
  );
};

export default App;
