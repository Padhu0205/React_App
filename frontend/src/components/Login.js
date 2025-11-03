import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const submit = async (e) => {
    e.preventDefault();
    try { await login(email, password); alert('Logged in'); }
    catch (err) { alert(err.response?.data?.message || 'Error'); }
  };

  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required /> <br />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /> <br />
      <button type="submit">Login</button>
    </form>
  );
}
