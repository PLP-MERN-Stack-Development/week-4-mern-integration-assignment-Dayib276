import React from 'react';

export default function TaskCard({ title, description }) {
  return (
    <div className="border rounded p-4 shadow bg-white mb-2">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
