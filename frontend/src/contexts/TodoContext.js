import React, { createContext, useState, useContext, useEffect } from 'react';
import API from '../api';
import { AuthContext } from './AuthContext';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchTodos = async () => {
    if (!user) return setTodos([]);
    const res = await API.get('/todos');
    setTodos(res.data);
  };

  useEffect(() => { fetchTodos(); }, [user]);

  const addTodo = async (text) => {
    const res = await API.post('/todos', { text });
    setTodos(prev => [res.data, ...prev]);
  };

  const updateTodo = async (id, data) => {
    const res = await API.put(`/todos/${id}`, data);
    setTodos(prev => prev.map(t => (t._id === id ? res.data : t)));
  };

  const deleteTodo = async (id) => {
    await API.delete(`/todos/${id}`);
    setTodos(prev => prev.filter(t => t._id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
