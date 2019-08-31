import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
class TodoList extends React.Component{

  render(){
    console.log(this.props);
    let receiveTodo = this.props.receiveTodo;
    let allTodos = this.props.todos.map( todo => (
      <TodoListItem key={todo.id} todo={todo}/>
    ))
    return(
      <div>
        <h3>Todo List goes here!</h3>
        <ul>
          {allTodos}
        </ul>
    
        <TodoForm receiveTodo={receiveTodo} />
      </div>
    );
  }
}

export default TodoList;