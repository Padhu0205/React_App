import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Navbar(){
  const { user, logout } = useContext(AuthContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Logged {user ? 'in' : 'out'}</div>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}
