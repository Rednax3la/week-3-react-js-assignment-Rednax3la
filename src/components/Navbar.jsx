import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const { search, setSearch } = useContext(AppContext);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-2 rounded text-black"
        />
      </div>
    </nav>
  );
}
