import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import RoleDashboard from './pages/RoleDashboard';

function App() {
  const [view, setView] = useState('login');
  const [token, setToken] = useState('');
  const [role, setRole] = useState('user'); // For demonstration, you can set role after login

  // Simulate role assignment after login
  const handleLogin = (jwt) => {
    setToken(jwt);
    // Example: decode role from JWT or set manually
    setRole('user'); // or 'admin', 'manager', etc.
    setView('dashboard');
  };

  const handleLogout = () => {
    setToken('');
    setView('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <Navbar />
      <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow">
        {view === 'login' && <Login onSwitch={setView} onLogin={handleLogin} />}
        {view === 'signup' && <Signup onSwitch={setView} />}
        {view === 'dashboard' && role === 'user' && <Dashboard />}
        {view === 'dashboard' && role === 'admin' && <AdminDashboard />}
        {view === 'dashboard' && role === 'manager' && <RoleDashboard />}
        <div className="mt-4 flex justify-center">
          {token && <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
