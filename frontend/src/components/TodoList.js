import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { TodoContext } from '../contexts/TodoContext';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function TodoList(){
  const { user } = useContext(AuthContext);
  const { todos } = useContext(TodoContext);

  if (!user) return <div>Please register or login to manage your todos.</div>;

  return (
    <div>
      <h3>Your Todos</h3>
      <TodoForm />
      <div>
        {todos.length === 0 ? <div>No todos</div> : todos.map(t=> <TodoItem key={t._id} todo={t} />)}
      </div>
    </div>
  );
}
