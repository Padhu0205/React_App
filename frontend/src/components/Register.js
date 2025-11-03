import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const submit = async (e) => {
    e.preventDefault();
    try { await register(name, email, password); alert('Registered and logged in'); }
    catch (err) { alert(err.response?.data?.message || 'Error'); }
  };

  return (
    <form onSubmit={submit}>
      <h3>Register</h3>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required /> <br />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required /> <br />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /> <br />
      <button type="submit">Register</button>
    </form>
  );
}
