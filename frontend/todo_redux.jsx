import React from "react";
import ReactDom from "react-dom";
import configureStore from "./store/store";
import {receiveTodo, receiveTodos} from "./actions/todo_actions";
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './util/todo_api_util';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById("root");
  const store = configureStore();
  //remove window.store after development
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  ReactDom.render(<Root store={store} />, root);
})