import React, { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <button onClick={() => setDark(d => !d)} className="px-3 py-1 rounded bg-gray-200">
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
