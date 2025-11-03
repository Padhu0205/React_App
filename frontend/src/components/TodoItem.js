import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoItem({ todo }){
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const save = async () => {
    await updateTodo(todo._id, { text });
    setEditing(false);
  };

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', borderBottom: '1px solid #ddd', padding: '6px 0' }}>
      <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo._id, { completed: !todo.completed })} />
      {editing ? (
        <>
          <input value={text} onChange={e=>setText(e.target.value)} />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <div style={{ flex: 1 }}>{todo.text}</div>
      )}
      <button onClick={()=>setEditing(v=>!v)}>{editing ? 'Cancel' : 'Edit'}</button>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
}
