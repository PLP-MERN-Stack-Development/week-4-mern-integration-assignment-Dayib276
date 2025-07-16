import React, { useState } from 'react';
import { register } from '../api';

export default function Register({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register(email, password);
    setMessage(res.message || 'Registered!');
    if (!res.message?.includes('exists')) onSwitch('login');
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
      <button type="button" className="w-full text-blue-500 mt-2" onClick={() => onSwitch('login')}>Already have an account? Login</button>
      {message && <div className="text-red-500 mt-2">{message}</div>}
    </form>
  );
}
