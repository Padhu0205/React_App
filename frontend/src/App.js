import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { TodoProvider } from './contexts/TodoContext';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

export default function App(){
  return (
    <AuthProvider>
      <TodoProvider>
        <div style={{ maxWidth: 700, margin: '20px auto', padding: 10 }}>
          <Navbar />
          <h2>Todo App (MERN + Context API)</h2>
          <Register />
          <hr />
          <Login />
          <hr />
          <TodoList />
        </div>
      </TodoProvider>
    </AuthProvider>
  );
}
