import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function Details() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`items/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="mb-4">{data.description}</p>
      <p className="text-gray-600">Published: {new Date(data.publishedAt).toLocaleDateString()}</p>
    </div>
  );
}
