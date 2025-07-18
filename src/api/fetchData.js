export async function fetchData(endpoint) {
  const url = `${import.meta.env.VITE_API_URL}/${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
