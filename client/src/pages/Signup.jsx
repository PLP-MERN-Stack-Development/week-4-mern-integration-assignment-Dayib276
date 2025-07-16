import React, { useState } from 'react';
import { register } from '../api';

export default function Signup({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await register(email, password);
      setMessage(res.message || 'Registered!');
      if (!res.message?.includes('exists')) onSwitch('login');
    } catch (err) {
      setMessage('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
      <button type="button" className="w-full text-blue-500 mt-2" onClick={() => onSwitch('login')}>Already have an account? Login</button>
      {message && <div className="text-red-500 mt-2">{message}</div>}
    </form>
  );
}
