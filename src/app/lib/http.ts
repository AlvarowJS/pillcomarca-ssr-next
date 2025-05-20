import { API_BASE_URL } from './config';

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) throw new Error(`Error al llamar ${path}`);
  return res.json();
}
