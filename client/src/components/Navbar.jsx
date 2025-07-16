import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <span className="font-bold text-xl">MERN App</span>
      <div>
        <button className="bg-white text-blue-600 px-3 py-1 rounded">Theme</button>
      </div>
    </nav>
  );
}
