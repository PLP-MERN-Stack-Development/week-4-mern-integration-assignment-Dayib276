import React from 'react';

export default function TaskDialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg min-w-[300px]">
        {children}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
