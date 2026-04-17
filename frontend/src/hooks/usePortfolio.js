import { useState, useEffect } from 'react';

// In dev, Vite proxies /api to localhost:3001 automatically.
// In production, set VITE_API_URL to your backend URL (e.g. https://api.onrender.com)
const API_BASE = import.meta.env.VITE_API_URL || '';

export function usePortfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolio`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch portfolio data');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
