import React, { useState } from 'react';
import { login } from '../api';

export default function Login({ onSwitch, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await login(email, password);
      if (res.token) {
        onLogin(res.token);
        setMessage('');
      } else {
        setMessage(res.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      <button type="button" className="w-full text-blue-500 mt-2" onClick={() => onSwitch('register')}>No account? Register</button>
      {message && <div className="text-red-500 mt-2">{message}</div>}
    </form>
  );
}
