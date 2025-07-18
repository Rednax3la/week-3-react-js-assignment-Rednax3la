import React from 'react';

export default function Card({ item }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
