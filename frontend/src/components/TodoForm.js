import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoForm(){
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="New todo" value={text} onChange={e=>setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
