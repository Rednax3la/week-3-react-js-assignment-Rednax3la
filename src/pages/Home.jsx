import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';

export default function Home() {
  const { data, loading, error } = useFetch(`items?search=${encodeURIComponent(useContext(AppContext).search)}&page=${useContext(AppContext).page}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map(item => <Card key={item.id} item={item} />)}
    </div>
  );
}
